import { AccountLayout, Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import {
  Account,
  Connection,
  PublicKey,
  SystemProgram,
  SYSVAR_RENT_PUBKEY,
  Transaction,
  TransactionInstruction,
  signTransaction
} from '@solana/web3.js';
import BN from "bn.js";
import {TroveLayout, TROVE_ACCOUNT_DATA_LAYOUT, DEPOSIT_ACCOUNT_DATA_LAYOUT, DepositLayout, EscrowProgramIdString} from './layout';

export const depositUtil = async (
    wallet: object,
    tokenAmount: number,
    connection: object,
) => {

    const depositAccount = new Account();
    const escrowProgramId = new PublicKey(EscrowProgramIdString);

    const createDepositAccountIx = SystemProgram.createAccount({
        space: DEPOSIT_ACCOUNT_DATA_LAYOUT.span,
        lamports: await connection.getMinimumBalanceForRentExemption(DEPOSIT_ACCOUNT_DATA_LAYOUT.span),
        fromPubkey: wallet.publicKey,
        newAccountPubkey: depositAccount.publicKey,
        programId: escrowProgramId
    });

    const depositIx = new TransactionInstruction({
        programId: escrowProgramId,
        keys: [
            { pubkey: wallet.publicKey, isSigner: true, isWritable: false },
            { pubkey: depositAccount.publicKey, isSigner: false, isWritable: true },
            { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false},
        ],
        data: Buffer.from(
            Uint8Array.of(6,
            ...new BN(tokenAmount).toArray('le', 8),
        ))
    })

    const tx = new Transaction().add(createDepositAccountIx, depositIx);

    // добавляем данне для возможност формирования подписи
    let {blockhash} = await connection.getRecentBlockhash();
    tx.recentBlockhash = blockhash;
    tx.feePayer = wallet.publicKey;

    // to sign
    let signedTx = await wallet.signTransaction(tx);
    // to write without signer
    signedTx.partialSign(depositAccount)
    let txId = await connection.sendRawTransaction(signedTx.serialize());
    await connection.confirmTransaction(txId);

    // Info
    const encodedDepositAccount = (await connection.getAccountInfo(depositAccount.publicKey, 'singleGossip'))!.data;
    const decodedDepositState = DEPOSIT_ACCOUNT_DATA_LAYOUT.decode(encodedDepositAccount) as DepositLayout;

    return {
        depositAccountPubkey: depositAccount.publicKey.toBase58(),
        isInitialized: !!decodedDepositState.isInitialized,
        tokenAmount: new BN(decodedDepositState.tokenAmount, 10, 'le').toNumber(),
        rewardTokenAmount: new BN(decodedDepositState.rewardTokenAmount, 10, 'le').toNumber(),
        rewardGovernanceTokenAmount: new BN(decodedDepositState.rewardGovernanceTokenAmount, 10, 'le').toNumber(),
        rewardCoinAmount: new BN(decodedDepositState.rewardCoinAmount, 10, 'le').toNumber(),
        owner: new PublicKey(decodedDepositState.owner).toBase58(),
    };
}
