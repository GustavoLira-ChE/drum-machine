import React, {useContext} from 'react';
import HandleAppContext from '../context/HandleAppContext';

const ClipButton = ( {info} ) => {
    const { volume, power } = useContext(HandleAppContext);
    const handlePress = (e) => {
        let buttonPress = e.target.id
        buttonPress = String.fromCharCode(parseInt(buttonPress))
        playSound(buttonPress);
    }
    const playSound = (buttonPress) => {
        let sound = document.getElementById(buttonPress);
        try{
            sound.volume = volume;
            sound.play();
        } catch(error){
        }
    }
    addEventListener("keydown",function keypress(event){
        const keypress = event.key.toUpperCase();
        if(power){
            playSound(keypress);
        }
    });
    return (
        <div>
            {power ?
            <button 
                type="button" 
                className="btn btn-primary btn-sm" 
                style={{padding: "0.5rem", width: "60px"}}
                onClick={handlePress}
                id={info.keyCode}>
                {info.keyTrigger}
            </button> : 
            <button 
                type="button" 
                className="btn btn-primary btn-sm" 
                style={{padding: "0.5rem", width: "60px"}}
                onClick={handlePress}
                id={info.keyCode}
                disabled>
                {info.keyTrigger}
            </button>
            }
            <audio id={info.keyTrigger}>
                <source src={info.url} />
            </audio>
        </div>
    );
};

export default ClipButton;