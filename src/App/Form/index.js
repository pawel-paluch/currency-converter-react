import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = () => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null); 

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency)?.rate;

        if (!rate) {
            console.error("Nie znaleziono kursu dla wybranej waluty.");
            return;
        }

        if (amount <= 0) {
            console.error("Kwota musi być większa niż zero.");
            return;
        }

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form__header">Przelicznik walut</h1>
            <p>
                <label>
                    <span className="form__labelText">Kwota w zł*:</span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="Wpisz kwotę w zł"
                        className="form__field"
                        type="number"
                        required
                        step="0.01"
                        min="0.01"
                    />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">Waluta:</span>
                    <select
                        className="form__field"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency) => (
                            <option key={currency.short} value={currency.short}>
                                {currency.name}
                            </option>
                        ))}
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
            <p className="form__info">
                Kursy pochodzą ze strony nbp.pl z dnia 03.09.2024 r
            </p>
            {result && <Result result={result} />}

        </form>
    );
};
