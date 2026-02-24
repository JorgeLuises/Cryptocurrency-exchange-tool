import { useEffect, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../../store";
import type { Pair } from "../types";
import AlertMessage from "./AlertMessage";

export default function CriptoSearchForm() {

    const { fetchCrypto, cryptoCurrenciesArray, fetchCurrentCrypto } = useCryptoStore();
    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptocurrency: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        fetchCrypto();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(Object.values(pair).includes('')) {
            setError('Todos los campos son obligatorios');
            return
        }

        setError('');
        fetchCurrentCrypto(pair);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            {error && <AlertMessage>{error}</AlertMessage>}

            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select name="currency" id="currency" onChange={handleChange} value={pair.currency}>
                    <option value="">-- Sleciona moneda --</option>
                    {currencies.map(currencie => (
                        <option key={currencie.code} value={currencie.code}>{currencie.name}</option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptocurrency">Criptomoneda:</label>
                <select name="criptocurrency" id="criptocurrency" onChange={handleChange} value={pair.criptocurrency}>
                    <option value="">-- Sleciona criptomoneda --</option>
                    {cryptoCurrenciesArray.map(currency => (
                        <option key={currency.CoinInfo.Name} value={currency.CoinInfo.Name}>{currency.CoinInfo.FullName}</option>
                    ))}
                </select>
            </div>

            <input type="submit" value={'Cotizar criptomoneda'} />
        </form>
    )
}
