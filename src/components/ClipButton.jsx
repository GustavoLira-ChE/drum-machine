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
        playSound(keypress);
    });
    return (
        <div className="col">
            {power ?
            <button 
                type="button" 
                className="btn btn-primary btn-sm" 
                style={{padding: "0.5rem", width: "100px"}}
                onClick={handlePress}
                id={info.keyCode}>
                {info.id}
            </button> : 
            <button 
                type="button" 
                className="btn btn-primary btn-sm" 
                style={{padding: "0.5rem", width: "100px"}}
                onClick={handlePress}
                id={info.keyCode}
                disabled>
                {info.id}
            </button>
            }
            <audio id={info.keyTrigger}>
                <source src={info.url} />
            </audio>
        </div>
    );
};

export default ClipButton;