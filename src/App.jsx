import React from "react";
import ControllerContainer from "./containers/ControllerContainer";
import DrumPadContainer from "./containers/DrumPadContainer";
import { HandleAppProvider } from "./context/HandleAppContext";

const App = () => {
    return (
        <HandleAppProvider>
            <div className=".container-fluid pt-6" id="drum-machine">
                <div className="row">
                    <div className="col-2"></div>
                    <DrumPadContainer />
                    <ControllerContainer />
                </div>
            </div>
        </HandleAppProvider>
    );
};

export default App;