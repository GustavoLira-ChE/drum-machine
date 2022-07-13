import React from "react";
import useHandleApp from "../hooks/useHandleApp";

const HandleAppContext = React.createContext({});

const HandleAppProvider = ( {children} ) => {
    const handleAppObject = useHandleApp();

    return(
        <HandleAppContext.Provider value={handleAppObject}>
            {children}
        </HandleAppContext.Provider>
    );
};

export default HandleAppContext;
export { HandleAppProvider };