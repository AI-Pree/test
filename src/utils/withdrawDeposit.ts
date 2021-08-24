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
import Wallet from "@project-serum/sol-wallet-adapter";

export const withdrawDepositUtil = async (
    wallet: Wallet,
    depositId: string,
    tokenAmount: number,
    connection: Connection,
) => {

    const depositAccount = new PublicKey(depositId);
    const escrowProgramId = new PublicKey(EscrowProgramIdString);

    const depositIx = new TransactionInstruction({
        programId: escrowProgramId,
        keys: [
            { pubkey: wallet.publicKey, isSigner: true, isWritable: false },
            { pubkey: depositAccount, isSigner: false, isWritable: true },
        ],
        data: Buffer.from(
            Uint8Array.of(7,
            ...new BN(tokenAmount).toArray('le', 8),
        ))
    })

    const tx = new Transaction().add(depositIx);

    // добавляем данне для возможност формирования подписи
    let {blockhash} = await connection.getRecentBlockhash();
    tx.recentBlockhash = blockhash;
    tx.feePayer = wallet.publicKey;

    // to sign
    let signedTx = await wallet.signTransaction(tx);
    let txId = await connection.sendRawTransaction(signedTx.serialize());
    await connection.confirmTransaction(txId);

    // Info
    const encodedDepositAccount = (await connection.getAccountInfo(depositAccount, 'singleGossip'))!.data;
    const decodedDepositState = DEPOSIT_ACCOUNT_DATA_LAYOUT.decode(encodedDepositAccount) as DepositLayout;

    return {
        depositAccountPubkey: depositAccount.toBase58(),
        isInitialized: !!decodedDepositState.isInitialized,
        tokenAmount: new BN(decodedDepositState.tokenAmount, 10, 'le').toNumber(),
        rewardTokenAmount: new BN(decodedDepositState.rewardTokenAmount, 10, 'le').toNumber(),
        rewardGovernanceTokenAmount: new BN(decodedDepositState.rewardGovernanceTokenAmount, 10, 'le').toNumber(),
        rewardCoinAmount: new BN(decodedDepositState.rewardCoinAmount, 10, 'le').toNumber(),
        owner: new PublicKey(decodedDepositState.owner).toBase58(),
    };
}
