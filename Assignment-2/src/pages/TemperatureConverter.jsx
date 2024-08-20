import React, { useState, useEffect } from "react";
import TempConvertButton from "../components/TempConvertButton";

const TemperatureConverter = () => {
    const [inputTemp, setInputTemp] = useState("");
    const [inputUnit, setInputUnit] = useState("Celsius");
    const [outputUnit, setOutputUnit] = useState("Fahrenheit");
    const [outputTemp, setOutputTemp] = useState("");

    // TASK 4.2: Compute the convertedTemp for all the below cases.
    const convertTemperature = () => {
        let temp = parseFloat(inputTemp);
        if (isNaN(temp)) {
            setOutputTemp("Invalid Input");
            return;
        }

        let convertedTemp;
        if (inputUnit === "Celsius") {
            if (outputUnit === "Fahrenheit") {
                convertedTemp = (temp * 9) / 5 + 32;
            } else if (outputUnit === "Kelvin") {
                convertedTemp = temp + 273.15;
            } else {
                convertedTemp = temp;
            }
        } else if (inputUnit === "Fahrenheit") {
            if (outputUnit === "Celsius") {
                convertedTemp = (temp - 32) * 5 / 9;
            } else if (outputUnit === "Kelvin") {
                convertedTemp = (temp - 32) * 5 / 9 + 273.15;
            } else {
                convertedTemp = temp;
            }
        } else if (inputUnit === "Kelvin") {
            if (outputUnit === "Celsius") {
                convertedTemp = temp - 273.15;
            } else if (outputUnit === "Fahrenheit") {
                convertedTemp = (temp - 273.15) * 9 / 5 + 32;
            } else {
                convertedTemp = temp;
            }

        }

        setOutputTemp(convertedTemp.toFixed(2));
    };

    useEffect(() => {
        convertTemperature();
    }, [inputTemp, inputUnit, outputUnit]);

    return (
        <div className="page-bg converter">
            <div className="island">
                <h3>Temperature Converter</h3>
                <div className="input-section">
                    <select
                        value={inputUnit}
                        onChange={(e) => setInputUnit(e.target.value)}
                    >
                        <option value="Celsius">Celsius</option>
                        <option value="Fahrenheit">Fahrenheit</option>
                        <option value="Kelvin">Kelvin</option>
                    </select>
                    <input
                        type="number"
                        value={inputTemp}
                        onChange={(e) => setInputTemp(e.target.value)}
                        placeholder="Enter temperature"
                    />
                </div>
                <div className="output-section">
                    {/* TASK 4.1: Create a select component for outputUnit similar to the inputUnit select component. */}
                    <select
                        value={outputUnit}
                        onChange={(e) => setOutputUnit(e.target.value)}
                    >
                        <option value="Celsius">Celsius</option>
                        <option value="Fahrenheit">Fahrenheit</option>
                        <option value="Kelvin">Kelvin</option>
                    </select>
                    <input
                        type="text"
                        value={outputTemp}
                        readOnly
                        placeholder="Converted temperature"
                    />
                </div>
                {/* TASK 4.4: Pass outputUnit as a prop to TempConvertButton */}
                <TempConvertButton convertTemperature={convertTemperature} outputUnit={outputUnit} />
            </div>
        </div>
    );
};

export default TemperatureConverter;
