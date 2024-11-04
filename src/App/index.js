import React, { useState } from 'react';
import { Form } from './Form';
import { Clock } from './Clock';
import { Wrapper } from './styled';
import { currencies } from './currencies';

function App() {
    const [result, setResult] = useState(null); 

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency)?.rate;

        if (!rate) {
            console.error("Nie znaleziono kursu dla wybranej waluty.");
            return;
        }

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    };

    return (
        <Wrapper>
            <Clock />
            <Form
                result={result}
                calculateResult={calculateResult}
            />
        </Wrapper>
    );
}

export default App;
