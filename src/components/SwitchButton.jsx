import React, {useContext} from 'react';
import HandleAppContext from '../context/HandleAppContext';
import "../styles/switchButton.scss"

const SwitchButton = ( {keyword} ) => {

    const { power , turnOnOff, chooseBank } = useContext(HandleAppContext);

    const handleClick = (keyword) => {
        if(keyword === "power"){
            let switchButton = document.getElementById(keyword);
            turnOnOff(switchButton.checked);
        } else if(keyword === "bank"){
            let switchButton = document.getElementById(keyword);
            chooseBank(switchButton.checked);
        }
    }
    return (
        <div>
            <label htmlFor="">{keyword}</label>
            {power ?
                <input id={keyword} type="checkbox" name="checkbox" className="cm-toggle" onClick={() => handleClick(keyword)} /> :
                (keyword === "bank") ?
                <input id={keyword} type="checkbox" name="checkbox" className="cm-toggle" onClick={() => handleClick(keyword)} disabled/> :
                (keyword === "power") ?
                <input id={keyword} type="checkbox" name="checkbox" className="cm-toggle-red" onClick={() => handleClick(keyword)} /> :
                <input id={keyword} type="checkbox" name="checkbox" className="cm-toggle-red" onClick={() => handleClick(keyword)} />
            }
        </div>
    );
};

export default SwitchButton;