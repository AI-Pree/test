import { AccountLayout, Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Account, Connection, PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY, Transaction, TransactionInstruction } from "@solana/web3.js";
import BN from "bn.js";
import {TroveLayout, TROVE_ACCOUNT_DATA_LAYOUT, EscrowProgramIdString} from './layout';

export const closeBorrowUtil = async (
    wallet: string,
    troveId: string,
    connection: object
) => {

    const escrowProgramId = new PublicKey(EscrowProgramIdString);
    const troveAccount = new PublicKey(troveId)

    const closeBorrowIx = new TransactionInstruction({
        programId: escrowProgramId,
        keys: [
            { pubkey: wallet.publicKey, isSigner: true, isWritable: false },
            { pubkey: troveAccount, isSigner: false, isWritable: true },
        ],
        data: Buffer.from(
            Uint8Array.of(1, // id of instruction
            ))
    })

    const tx = new Transaction().add(closeBorrowIx);

    // добавляем данне для возможност формирования подписи
    let {blockhash} = await connection.getRecentBlockhash();
    tx.recentBlockhash = blockhash;
    tx.feePayer = wallet.publicKey;

    // to sign
    let signedTx = await wallet.signTransaction(tx);
    let txId = await connection.sendRawTransaction(signedTx.serialize());
    await connection.confirmTransaction(txId);

    // Info
    const encodedTroveState = (await connection.getAccountInfo(troveAccount, 'singleGossip'))!.data;
    const decodedTroveState = TROVE_ACCOUNT_DATA_LAYOUT.decode(encodedTroveState) as TroveLayout;

    return {
        troveAccountPubkey: troveAccount.toBase58(),
        isInitialized: !!decodedTroveState.isInitialized,
        isLiquidated: !!decodedTroveState.isLiquidated,
        borrowAmount: new BN(decodedTroveState.borrowAmount, 10, 'le').toNumber(),
        lamports: new BN(decodedTroveState.lamports, 10, 'le').toNumber(),
        owner: new PublicKey(decodedTroveState.owner).toBase58(),
    };
}
