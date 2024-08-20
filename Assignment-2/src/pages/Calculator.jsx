import React, { useState, useEffect } from "react";

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    // TASK 3.1: Add functionality to the handleClick function. It should append the newly clicked value to the previous value.
    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };


    const handleClear = () => {
        setInput("");
        setResult("");
    };

    // TASK 3.2: Add functionality to the Evaluate function to compute the result.
    const Evaluate = (input) => {
        if (input) {
            try {
                setResult(eval(input));
            } catch {
                setResult("Error");
            }
        } else {
            setResult("");
        }
    };

    useEffect(() => {
        Evaluate(input);
    }, [input]);

    return (
        <div className="page-bg calculator">
            <div className="island">
                <h3>Calculator</h3>
                <div className="buttons">
                    <div className="display">
                        <input type="text" value={input} readOnly />
                        <div className="result">{result}</div>
                    </div>
                    <button onClick={handleClear}>C</button>
                    <button onClick={() => handleClick("(")}>(</button>
                    <button onClick={() => handleClick(")")}>)</button>
                    <button onClick={() => handleClick("/")}>/</button>
                    <button onClick={() => handleClick("7")}>7</button>
                    <button onClick={() => handleClick("8")}>8</button>
                    <button onClick={() => handleClick("9")}>9</button>
                    <button onClick={() => handleClick("*")}>*</button>
                    <button onClick={() => handleClick("4")}>4</button>
                    <button onClick={() => handleClick("5")}>5</button>
                    <button onClick={() => handleClick("6")}>6</button>
                    <button onClick={() => handleClick("-")}>-</button>
                    <button onClick={() => handleClick("1")}>1</button>
                    <button onClick={() => handleClick("2")}>2</button>
                    <button onClick={() => handleClick("3")}>3</button>
                    <button onClick={() => handleClick("+")}>+</button>
                    <button onClick={() => handleClick("0")} className="zero">
                        0
                    </button>
                    <button onClick={() => handleClick(".")}>.</button>
                    <button onClick={() => Evaluate(input)}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
