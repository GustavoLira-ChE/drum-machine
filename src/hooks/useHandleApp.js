import { useState } from "react";
import {bankOne, bankTwo} from "../constants.js";

const useHandleApp = () => {
    const [power, setPower] = useState(false);
    const [bankUse, setBankUse] = useState(bankOne);
    const [volume, setVolume] = useState(50);

    const turnOnOff = (check) => {
        setPower(check);
    };

    const chooseBank = (check) => {
        if(!check){
            setBankUse(bankOne)
        } else {
            setBankUse(bankTwo)
        }
    };

    const handleVolume = (volumeNumber) =>{
        setVolume(volumeNumber/100);
    };


    return {
        bankUse,
        power,
        volume,
        turnOnOff,
        chooseBank,
        handleVolume
    }
};

export default useHandleApp;