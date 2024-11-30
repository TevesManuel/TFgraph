import React, { useState } from 'react';
import './App.css';
import DegreeFunctionInput from './components/DegreeFunctionInput/DegreeFunctionInput';
import CoeficientFunctionInput from './components/CoeficientFunctionInput/CoeficientFunctionInput';

const App : React.FC = () => {
    const [quantity, setQuantity] = useState<number>(1); // Estado para el valor

    const handleQuantityChange = (newValue: number) => {
      setQuantity(newValue); // Actualiza el valor del estado cuando cambia el input
    };

    const inputs = [];
    for (let i = 0; i < quantity; i++) {
      inputs.push(
        <div key={i}>
            <CoeficientFunctionInput value={quantity} onChange={handleQuantityChange}/>
        </div>
      );
    }

    return (
        <div className='mainContainer'>
            <div className='navbar'>
                <h1>TFgraph</h1>
            </div>
            <div className='mainApp'>
                <div>
                    <div className='gradeMainContainer'>
                        <p>Grade of the numerador</p>
                        <DegreeFunctionInput value={quantity} onChange={handleQuantityChange}/>
                    </div>
                    <div className='coefMainContainer'>
                        {inputs}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
