import { useState } from "react";
import {bankOne, bankTwo} from "../constants.js";

const useHandleApp = () => {
    const [power, setPower] = useState(false);
    const [bankUse, setBankUse] = useState(bankOne);
    const [volume, setVolume] = useState(0.5);
    const [display, setDisplay] = useState("");

    const turnOnOff = (check) => {
        setPower(check);
    };

    const chooseBank = (check) => {
        if(!check){
            setBankUse(bankOne);
            handledisplay("Bank One");
        } else {
            setBankUse(bankTwo)
            handledisplay("Bank Two");
        }
    };

    const handleVolume = (volumeNumber) =>{
        setVolume(volumeNumber/100);
    };
    const handledisplay = (value) => {
        setDisplay(value);
        setTimeout(() => {
            setDisplay("");
        }, 3000);
    }


    return {
        bankUse,
        power,
        volume,
        display,
        turnOnOff,
        chooseBank,
        handleVolume,
        handledisplay
    }
};

export default useHandleApp;