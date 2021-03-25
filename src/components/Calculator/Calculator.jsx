import React from 'react';
import { CalcContext } from '../../contexts/CalcContext';
import styles from './styles.module.css';

export default function Calculator () {
    const [values, setValues] = React.useState([]);
    const CalculatorContext = React.useContext(CalcContext);
    
    function handleValues (event) {
        setValues([...values, event.target.innerText]);
        CalculatorContext.setDisplayValue([...CalculatorContext.displayValue, event.target.innerText]);
    };

    function setFirstValue (event) {
        CalculatorContext.setOperator(event.target.value);
        
        const finalValue = parseInt(values.reduce((a, b) => a + b));
        CalculatorContext.setFirstValue(finalValue);
        CalculatorContext.setDisplayValue(['']);
        setValues([]);
        return;
    };

    function setSecondValue () {
        const finalValue = parseInt(values.reduce((a, b) => a + b));
        CalculatorContext.setSecondValue(finalValue);
        CalculatorContext.getResult();
        return;
    };

    return (
        <main className={styles.mainContainer}>
            <table>
                <tr>
                    <td><button onClick={handleValues}>7</button></td>
                    <td><button onClick={handleValues}>8</button></td>
                    <td><button onClick={handleValues}>9</button></td>
                </tr>
                <tr>
                    <td><button onClick={handleValues}>4</button></td>
                    <td><button onClick={handleValues}>5</button></td>
                    <td><button onClick={handleValues}>6</button></td>
                </tr>
                <tr>
                    <td><button onClick={handleValues}>1</button></td>
                    <td><button onClick={handleValues}>2</button></td>
                    <td><button onClick={handleValues}>3</button></td>
                </tr>
                <tr>
                    <td><button className={styles.operator} value="+" onClick={setFirstValue}>+</button></td>
                    <td><button className={styles.operator} value="-" onClick={setFirstValue}>-</button></td>
                    <td><button className={styles.operator} value="*" onClick={setFirstValue}>X</button></td>
                </tr>
                <tr>
                    <td><button className={styles.operator} value="/" onClick={setFirstValue}>/</button></td>
                    <td><button className={styles.operator} onClick={setSecondValue}>==</button></td>
                    <td><button className={styles.operator}>AC</button></td>
                </tr>
            </table>
        </main>
    )
};