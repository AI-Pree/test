import {
  Account,
  Connection,
  PublicKey,
  SystemProgram,
  SYSVAR_RENT_PUBKEY,
  Transaction,
  TransactionInstruction
} from '@solana/web3.js';
import BN from "bn.js";
import {TroveLayout, TROVE_ACCOUNT_DATA_LAYOUT, DEPOSIT_ACCOUNT_DATA_LAYOUT, DepositLayout, EscrowProgramIdString} from './layout';

export const addDepositUtil = async (
    wallet: PublicKey,
    depositId: string,
    tokenAmount: number,
    connection: object,
) => {

    const depositAccount = new PublicKey(depositId);
    const tempDepositAccount = new Account();
    const escrowProgramId = new PublicKey(EscrowProgramIdString);

    const createDepositAccountIx = SystemProgram.createAccount({
        space: DEPOSIT_ACCOUNT_DATA_LAYOUT.span,
        lamports: await connection.getMinimumBalanceForRentExemption(DEPOSIT_ACCOUNT_DATA_LAYOUT.span),
        fromPubkey: wallet.publicKey ?? PublicKey,
        newAccountPubkey: tempDepositAccount.publicKey,
        programId: escrowProgramId
    });

    const depositIx = new TransactionInstruction({
        programId: escrowProgramId,
        keys: [
            { pubkey: wallet.publicKey, isSigner: true, isWritable: false },
            { pubkey: depositAccount, isSigner: false, isWritable: true },
            { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false},
            { pubkey: tempDepositAccount.publicKey, isSigner: false, isWritable: false},
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
    signedTx.partialSign(tempDepositAccount)
    let txId = await connection.sendRawTransaction(signedTx.serialize());
    await connection.confirmTransaction(txId);

    // Info
    const encodedDepositAccount = (Object<any>) => (await connection.getAccountInfo(depositAccount, 'singleGossip'))!.data;
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
