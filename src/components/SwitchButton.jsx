import React from 'react';
import "../styles/switchButton.scss"

const SwitchButton = () => {
    return (
        <div>
            <div>
                <input type="checkbox" name="checkbox" className="cm-toggle"/>
            </div>
        </div>
    );
};

export default SwitchButton;