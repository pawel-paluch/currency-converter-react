import React, { useState } from 'react';
import { Form } from './Form';
import { Clock } from './Clock';
import { Wrapper } from './styled';

function App() {
    return (
        <Wrapper>
            <Clock />
            <Form />
        </Wrapper>
    );
}

export default App;
