import React, { useState } from 'react';
import './App.css';

import DegreeFunctionInput from './components/DegreeFunctionInput/DegreeFunctionInput';
import CoeficientFunctionInput from './components/CoeficientFunctionInput/CoeficientFunctionInput';

const App : React.FC = () => {
    const [numGrade, setNumGrade] = useState<number>(1);
    const [denGrade, setDenGrade] = useState<number>(1);

    const numInputs = [];
    for (let i = 0; i < numGrade; i++) {
        numInputs.push(
        <div style={{'display': 'flex', 'alignItems': 'center'}}>
            <CoeficientFunctionInput key={i} />
            <p>s^{numGrade-i-1}</p>
            {numGrade-i-1 != 0 ? <p>+</p> : ""}
        </div>
      );
    }

    const denInputs = [];
    for (let i = 0; i < denGrade; i++) {
        denInputs.push(
        <div style={{'display': 'flex', 'alignItems': 'center'}}>
            <CoeficientFunctionInput key={i} />
            s^{denGrade-i-1}
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
                        <p>Grade of the numerator</p>
                        <DegreeFunctionInput value={numGrade} setter={setNumGrade}/>
                    </div>
                    <div className='gradeMainContainer'>
                        <p>Grade of the denominator</p>
                        <DegreeFunctionInput value={denGrade} setter={setDenGrade}/>
                    </div>
                    <div className='coefMainContainer'>
                        {numInputs}
                    </div>
                    <div className='divisorLine'></div>
                    <div className='coefMainContainer'>
                        {denInputs}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
