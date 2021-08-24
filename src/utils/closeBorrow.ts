import { AccountLayout, Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Account, Connection, PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY, Transaction, TransactionInstruction } from "@solana/web3.js";
import BN from "bn.js";
import {TroveLayout, TROVE_ACCOUNT_DATA_LAYOUT, EscrowProgramIdString} from './layout';
import Wallet from "@project-serum/sol-wallet-adapter";

export const closeBorrowUtil = async (
    wallet: Wallet,
    // Адрес токена GENS
    tokenMintAccountPubkey: string,
    troveId: string,
    // Адрес кошелька токена пользователя GENS
    pdaToken: string,
    connection: Connection,
) => {

    const escrowProgramId = new PublicKey(EscrowProgramIdString);
    const troveAccount = new PublicKey(troveId)
    const tokenMintAcc = new PublicKey(tokenMintAccountPubkey)
    const pdaTokenAcc = new PublicKey(pdaToken)

    const closeBorrowIx = new TransactionInstruction({
        programId: escrowProgramId,
        keys: [
            { pubkey: wallet.publicKey, isSigner: true, isWritable: false },
            { pubkey: troveAccount, isSigner: false, isWritable: true },
            { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
            { pubkey: pdaTokenAcc, isSigner: false, isWritable: true },
            { pubkey: tokenMintAcc, isSigner: false, isWritable: true },
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
    return (await connection.getAccountInfo(troveAccount, 'singleGossip'))
}
