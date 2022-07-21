import React, {useEffect, useContext} from 'react';
import HandleAppContext from '../context/HandleAppContext';

const VolumeSlider = () => {
    const { handleVolume, power, handledisplay } = useContext(HandleAppContext);
    addEventListener("input", (e) => {
        let value = e.target.value;
        if( !isNaN(parseInt(value)) ){
            handleVolume(parseInt(value));
            handledisplay(String(value));
        }
    });
    return (
        <div className="slidecontainer">
            {power ? 
                <input id="slider1" type="range" min="1" max="100" className="slider" defaultValue="50" /> : 
                <input id="slider1" type="range" min="1" max="100" className="slider" defaultValue="50" disabled />
            }
        </div>
    );
};

export default VolumeSlider;