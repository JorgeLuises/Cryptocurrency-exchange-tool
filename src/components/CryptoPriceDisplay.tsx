import { useMemo } from "react";
import { useCryptoStore } from "../../store"
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {

    const { CryptoPrice, loading } = useCryptoStore();
    const hasResult = useMemo(() => Object.keys(CryptoPrice).length > 0, [CryptoPrice]);

    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com/${CryptoPrice.IMAGEURL}`} alt="" />
                        <div>
                            <p>El precio es de: <span>{CryptoPrice.PRICE}</span></p>
                            <p>Precio más alto del día: <span>{CryptoPrice.HIGHDAY}</span></p>
                            <p>Precio más bajo del día: <span>{CryptoPrice.LOWDAY}</span></p>
                            <p>Variación últimas 24 horas: <span>{CryptoPrice.CHANGEPCT24HOUR}</span></p>
                            <p>Última actualización: <span>{CryptoPrice.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
