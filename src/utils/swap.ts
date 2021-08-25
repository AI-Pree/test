import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Connection, PublicKey } from '@solana/web3.js';
import { EscrowProgramIdString } from './layout';
import { Market } from '@project-serum/serum'
import Wallet from "@project-serum/sol-wallet-adapter";


export const swapUtil = async (
  wallet: Wallet,
  price: number,
  from: string,
  to: string,
  connection: Connection,
) => {

  let marketAddress = new PublicKey('4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R');
  let programAdress = new PublicKey(EscrowProgramIdString);
  let market = await Market.load(connection, marketAddress, {}, programAdress);
  let bids = await market.loadBids(connection);
  for (let [price, size] of bids.getL2(20)) {
    console.log(price, size);
  }

  return {
    status: true
  }
}
