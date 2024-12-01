import { useState } from "react";
import "./DegreeFunctionInput.css";

interface DegreeFunctionInputProps {
    value: number;
    setter : React.Dispatch<React.SetStateAction<number>>;
}
  
const MAX = 4;

const DegreeFunctionInput : React.FC<DegreeFunctionInputProps> = ({value, setter}) => {
    return (
        <div className="DegreeFunctionInputMainContainer">
            <button onClick={() => {
                if(value > 1)
                    setter(value - 1);
            }}>
                -
            </button>
            <div>
                {value}
            </div>
            <button onClick={() => {
                if(value < MAX)
                    setter(value + 1);
            }}>
                +
            </button>
        </div>
    );
};

export default DegreeFunctionInput;