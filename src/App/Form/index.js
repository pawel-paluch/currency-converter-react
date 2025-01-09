import React, { useState } from "react";
import { Result } from "./Result";
import {
    Button,
    Field,
    Header,
    Info,
    LabelText,
    Loading,
    Failure,
} from "./styled";
import { useRatesData } from "./useRatesData";

export const Form = () => {
    const [result, setResult] = useState();
    const [amount, setAmount] = useState(""); 
    const [currency, setCurrency] = useState("USD"); 
    const ratesData = useRatesData(); 

    const calculateResult = (currency, amount) => {
        const numericAmount = parseFloat(amount); 
        if (isNaN(numericAmount) || numericAmount <= 0) {
            alert("Wprowadź poprawną kwotę większą od 0!");
            setResult(null);
            return;
        }

        const rate = ratesData.rates?.[currency]?.value || 1;
        const plnToUsdRate = ratesData.rates?.["PLN"]?.value || 1;

        const targetAmount = (numericAmount / plnToUsdRate) * rate;

        setResult({
            sourceAmount: numericAmount,
            targetAmount,
            currency,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form onSubmit={onSubmit}>
            <Header>Przelicznik walut</Header>
            {ratesData.state === "loading" ? (
                <Loading>Ładuję kursy. Proszę o cierpliwość...</Loading>
            ) : ratesData.state === "error" ? (
                <Failure>Wystąpił błąd podczas ładowania danych!</Failure>
            ) : (
                <>
                    <p>
                        <label>
                            <LabelText>Kwota w złotówkach (PLN)*:</LabelText>
                            <Field
                                value={amount}
                                onChange={({ target }) => setAmount(target.value)}
                                placeholder="Wpisz kwotę w zł"
                                type="number"
                                required
                                step="0.01"
                                min="0.01"
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            <LabelText>Waluta docelowa:</LabelText>
                            <Field
                                as="select"
                                value={currency}
                                onChange={({ target }) => setCurrency(target.value)}
                            >
                                {ratesData.rates &&
                                    Object.keys(ratesData.rates).map((currency) => (
                                        <option key={currency} value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                            </Field>
                        </label>
                    </p>
                    <p>
                        <Button>Przelicz</Button>
                    </p>
                    <Info>Kursy pobierane są z CurrencyAPI na dzień: <strong>{ratesData.date}</strong></Info>
                    <Result result={result} />
                </>
            )}
        </form>
    );
};
