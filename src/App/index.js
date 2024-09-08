import React, { useState } from 'react';
import './App.css';
import './index.css';
import { Form } from './Form';
import { currencies } from './currencies';

function App() {
    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies
            .find(({ short }) => short === currency)
            .rate;

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

    return (
        <div className="app">
            <Form
                result={result}
                calculateResult={calculateResult}
            />
        </div>
    );
}

export default App;
