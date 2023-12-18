import React from "react";
import '../styles/Button.css';

function Button({text, isButtonClick, gestionClick}){
    return (
        <button 
            className={isButtonClick ? 'button-click' : 'button-reset'}
            onClick={gestionClick}>
                {text}
        </button>
    );
}

export default Button;