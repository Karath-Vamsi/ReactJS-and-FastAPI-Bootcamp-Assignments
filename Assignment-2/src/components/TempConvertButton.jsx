import React from "react";

const TempConvertButton = ({ convertTemperature, outputUnit }) => {
     /* TASK 4.3: Add a prop to TempConvertButton component to display the outputUnit */
    
     return <button onClick={convertTemperature}>Convert to {outputUnit}</button>;
};
export default TempConvertButton;
