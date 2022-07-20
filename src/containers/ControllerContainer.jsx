import React from 'react';
import SwitchButton from '../components/SwitchButton';
import VolumeSlider from '../components/VolumeSlider';

const ControllerContainer = () => {
    return (
        <div className="container col-4 d-grid gap-3">
            <SwitchButton keyword={"power"}/>
            <SwitchButton keyword={"bank"}/>
            <VolumeSlider />
        </div>
    );
};

export default ControllerContainer;