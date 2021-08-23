import * as BufferLayout from "buffer-layout";

/**
 * Layout for a public key
 */
const publicKey = (property = "publicKey") => {
  return BufferLayout.blob(32, property);
};

export const EscrowProgramIdString = 'GgMKgNMEY8QTHFXC5xSkMAKaYQqkiZ3WqFbZaBPRFwrA'

/**
 * Layout for a 64bit unsigned value
 */
const uint64 = (property = "uint64") => {
  return BufferLayout.blob(8, property);
};

export const ESCROW_ACCOUNT_DATA_LAYOUT = BufferLayout.struct([
  BufferLayout.u8("isInitialized"),
  publicKey("initializerPubkey"),
  publicKey("initializerTempTokenAccountPubkey"),
  publicKey("initializerReceivingTokenAccountPubkey"),
  uint64("expectedAmount"),
]);

export const TROVE_ACCOUNT_DATA_LAYOUT = BufferLayout.struct([
  BufferLayout.u8("isInitialized"),
  BufferLayout.u8("isLiquidated"),
  uint64("borrowAmount"),
  uint64("lamports"),
  publicKey("owner"),
]);

export const DEPOSIT_ACCOUNT_DATA_LAYOUT = BufferLayout.struct([
  BufferLayout.u8("isInitialized"),
  uint64("tokenAmount"),
  uint64("rewardTokenAmount"),
  uint64("rewardGovernanceTokenAmount"),
  uint64("rewardCoinAmount"),
  publicKey("owner"),
]);

export interface TroveLayout {
  isInitialized: number,
  isLiquidated: number,
  borrowAmount: Uint8Array,
  lamports: Uint8Array,
  owner: Uint8Array
}

export interface DepositLayout {
  isInitialized: number,
  tokenAmount: Uint8Array,
  rewardTokenAmount: Uint8Array,
  rewardGovernanceTokenAmount: Uint8Array,
  rewardCoinAmount: Uint8Array,
  owner: Uint8Array
}
