
import { PublicKey, Connection } from '@solana/web3.js';
import BN from "bn.js";
import {TroveLayout, TROVE_ACCOUNT_DATA_LAYOUT} from './layout';


export const encodeUtil = async (
  trove,
  connection: Connection,
) => {
  const encodedTroveState = (await connection.getAccountInfo(new PublicKey(trove), 'singleGossip'))!.data;
  const decodedTroveState = TROVE_ACCOUNT_DATA_LAYOUT.decode(encodedTroveState) as TroveLayout;

  return {
    troveAccountPubkey: trove.toBase58(),
    isInitialized: !!decodedTroveState.isInitialized,
    isLiquidated: !!decodedTroveState.isLiquidated,
    isReceived: !!decodedTroveState.isReceived,
    borrowAmount: new BN(decodedTroveState.borrowAmount, 10, 'le').toNumber(),
    lamports: new BN(decodedTroveState.lamports, 10, 'le').toString(),
    teamFee: new BN(decodedTroveState.teamFee, 10, 'le').toString(),
    depositorFee: new BN(decodedTroveState.depositorFee, 10, 'le').toString(),
    amountToClose: new BN(decodedTroveState.amountToClose, 10, 'le').toString(),
    owner: new PublicKey(decodedTroveState.owner).toBase58(),
  }
}
