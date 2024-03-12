import React, { useState } from "react";
import Calculator from "./Calculator";
import './Container.css';


const CalculatorContainer: React.FC = () => {
    return (
        <div className="container">
            <Calculator/>
        </div>
    )
}

export default CalculatorContainer