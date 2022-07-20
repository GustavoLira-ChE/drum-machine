import React from "react";
import ControllerContainer from "./containers/ControllerContainer";
import DrumPadContainer from "./containers/DrumPadContainer";
import { HandleAppProvider } from "./context/HandleAppContext";

const App = () => {
    return (
        <HandleAppProvider>
            <div className="container" id="drum-machine">
                <div className="row">
                    <DrumPadContainer />
                    <ControllerContainer />
                </div>
            </div>
        </HandleAppProvider>
    );
};

export default App;