import React, {useState} from 'react';

const ClipButton = ( {info} ) => {
    const handlePress = (e) => {
        let buttonPress = e.target.id
        buttonPress = String.fromCharCode(parseInt(buttonPress))
        playSound(buttonPress);
    }
    const playSound = (buttonPress) => {
        let sound = document.getElementById(buttonPress);
        try{
            sound.currentTime = 0;
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
            <button 
                type="button" 
                className="btn btn-primary" 
                onClick={handlePress}
                id={info.keyCode}>
                Click me!
            </button>
            <audio id={info.keyTrigger}>
                <source src={info.url} />
            </audio>
        </div>
    );
};

export default ClipButton;