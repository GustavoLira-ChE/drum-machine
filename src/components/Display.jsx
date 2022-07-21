import React, {useContext} from 'react';
import HandleAppContext from '../context/HandleAppContext';


const Display = () => {
    const { display } = useContext(HandleAppContext);
    return (
        <div>
            <p className="badge bg-primary" style={{width: "100px", height: "30px", position: "relative"}}>
                <span style={{position: "absolute", top: "0", right: "0", bottom: "0", left: "0"}}>{display}</span>
            </p>
        </div>
    );
};

export default Display;