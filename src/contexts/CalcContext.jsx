import React from 'react';

export const CalcContext = React.createContext({});

export default function CalcContextProvider ({children}) {
    const [operator, setOperator] = React.useState('');
    const [firstValue, setFirstValue] = React.useState(0);
    const [displayValue, setDisplayValue] = React.useState(['']);
    const [finalValue, setFinalValue] = React.useState(0);
    const [secondValue, setSecondValue] = React.useState('');

    function calc (value1, value2, operator){
        if (operator === '+') {
            return value1 + value2;
        } else if (operator === '-') {
            return value1 - value2;
        } else if (operator === '*') {
            return value1 * value2;
        } else if (operator === '/') {
            return value1 / value2;
        }
    };
    
    function getResult () {
        const calculatedValue = calc(firstValue, secondValue, operator);
        setDisplayValue(['', calculatedValue]);
    };

    return (
        <CalcContext.Provider value={{
            setOperator,
            getResult,
            setFirstValue,
            setSecondValue,
            setDisplayValue,
            firstValue,
            secondValue,
            displayValue,
            operator
        }}>
            {children}
        </CalcContext.Provider>
    );
};