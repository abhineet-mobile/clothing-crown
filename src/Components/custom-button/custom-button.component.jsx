import React from 'react';

import './custom-button.styles.scss'; 

const CustomButton = ({children , isGoogleSigIn, inverted, ...otherProps})=>(

    <button className={`${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton; 