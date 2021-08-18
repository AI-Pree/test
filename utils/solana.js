import {
  Account,
  AccountInfo,
  Commitment,
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionSignature,
  TransactionInstruction
} from '@solana/web3.js'
import { NuxtApiInstance, Rpc } from '@/types/api'

async function getFastEndpoint(api = NuxtApiInstance, endpoints = Rpc) {
  let rpc = ''
  for (const endpoint of endpoints) {
    api.getEpochInfo(endpoint.url).then(() => {
      if (!rpc) {
        rpc = endpoint.url
      }
    })
  }
  while (true) {
    if (rpc) {
      break
    }
    await Promise((resolve) => setTimeout(resolve, 10))
  }
  return rpc
}

export const solanaConfig = {
  strategy: 'speed',
  rpcs: [
    { url: 'https://solana-api.projectserum.com', weight: 50 },
    { url: 'https://raydium.rpcpool.com', weight: 40 },
    { url: 'https://api.mainnet-beta.solana.com', weight: 10 }
  ]
}

export const commitment = Commitment = 'confirmed'

const web3Plugin = async (ctx, inject) => {
  const { $api } = ctx

  let config
  let endpoint
  let configFrom

  try {
    config = await $api.getConfig()
    configFrom = 'remote'
  } catch (error) {
    config = web3Config
    configFrom = 'local'
  }

  const { rpcs, strategy } = solanaConfig

  endpoint = await getFastEndpoint($api, rpcs)

  const web3 = new Connection(endpoint, commitment)

  ctx.$web3 = web3
  inject('web3', web3)
}

export default web3Plugin
