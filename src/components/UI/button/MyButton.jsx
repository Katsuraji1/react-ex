import React from "react";
import buttons from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return ( 
        <button {...props} className={buttons.myBtn}>
            {children}
        </button>
    );
}

export default MyButton;