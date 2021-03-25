import React from 'react';
import { CalcContext } from '../../contexts/CalcContext';
import styles from './styles.module.css';

export default function Display () {
    const CalculatorContext = React.useContext(CalcContext);
    let value = 0;

    function fixDisplayNumbers () {
        value = CalculatorContext.displayValue.reduce((a,b) => {
            return a + b;
        });
        
        return value;
    };

    return (
        <header className={styles.displayHeader}>
            <input type="text" value={fixDisplayNumbers()} readOnly/>
        </header>
    );
};