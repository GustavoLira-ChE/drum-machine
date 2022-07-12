import React, {useState} from 'react';

const ButtonPad = () => {
    const [show, setShow] = useState("key"); 
    const handlePress = () => {
        playSound();
    }
    const playSound = () => {
        const sound = document.getElementById("Q");
        sound.currentTime = 0;
        sound.play();
    }
    addEventListener("keydown",(e)=> {
        console.log(e.key)
        if (e.key === "q") {
            playSound();
        }
    });
    return (
        <div>
            <p>Display press key: {show}</p>
            <button type="button" className="btn btn-primary" onClick={handlePress}>
                Click me!
            </button>
            <audio id="Q">
                <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" />
            </audio>
        </div>
    );
};

export default ButtonPad;