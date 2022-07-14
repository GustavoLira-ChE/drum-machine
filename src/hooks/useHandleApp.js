import { useState } from "react";
import {bankOne, bankTwo} from "../constants.js";

const useHandleApp = () => {
    const [bankUse, setBankUse] = useState(bankOne);

    return {
        bankUse
    }
};

export default useHandleApp;