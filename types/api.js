export const PricesData = {
  [key]: Number
}

export const InfoData = {
  tvl: Number,
  volume24h: Number
}

export const PairData = {}

export const Rpc = {
  url: String,
  weight: Number
}

export const ConfigData = {
  success: Boolean,
  strategy: 'speed' | 'weight',
  rpcs: Rpc
}

export const EpochInfo = {}

export const NuxtApiInstance = {
  getPrices: () => Promise<PricesData>,
  getInfo: () => Promise<InfoData>,
  getPairs: () => Promise<PairData[]>,
  getConfig: () => Promise<ConfigData>,
  getEpochInfo: (rpc: string) => Promise<EpochInfo>
}
