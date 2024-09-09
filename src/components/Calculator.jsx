import { useState } from "react";
import {evaluate} from "mathjs"
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleCalculate = () => {
    try {
      
      const evalResult = evaluate(input);

      
      if (input.includes('0/0') && !evalResult) {
        setResult('NaN')
      } else if (input.includes('/0') && !evalResult) {
        setResult('Infinity');
      } else if (isNaN(evalResult)) {
        setResult('Error');
      } else {
        setResult(evalResult.toString());
      }
    } catch {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className={styles.calculator}>
    
      <input 
        type="text" 
        value={input} 
        readOnly 
        className="input-field"
      />
      
      <div className={styles.result}>{result}</div>
      <div className={styles.buttons}>
       
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
