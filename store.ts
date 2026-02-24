import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { CryptoCurrency, Pair, CryptoPrice } from './src/types/index';
import { getCryptos, fetchCurrentCryptoPrice } from './src/services/CryptoService';

type storeType = {
    fetchCrypto : () => Promise<void>;
    fetchCurrentCrypto : (pair : Pair) => Promise<void>;
    cryptoCurrenciesArray : CryptoCurrency[];
    CryptoPrice : CryptoPrice;
    loading : boolean;
}

export const useCryptoStore = create<storeType>()(devtools((set) => ({
    cryptoCurrenciesArray: [],
    CryptoPrice: {},
    loading: false,
    fetchCrypto: async () => {
        const cryptoCurrencies = await getCryptos();
        set(() => ({
            cryptoCurrenciesArray: cryptoCurrencies
        }))
    },
    fetchCurrentCrypto: async (pair) => {
        set(() => ({
            loading: true
        }))
        const result = await fetchCurrentCryptoPrice(pair);
        set(() => ({
            CryptoPrice: result,
            loading: false
        }))
    }
})));