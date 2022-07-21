import React from 'react';
import Display from '../components/Display';
import SwitchButton from '../components/SwitchButton';
import VolumeSlider from '../components/VolumeSlider';

const ControllerContainer = () => {
    return (
        <div className="col-4 d-flex flex-column gap-3">
            <SwitchButton keyword={"power"}/>
            <SwitchButton keyword={"bank"}/>
            <VolumeSlider />
            <Display />
        </div>
    );
};

export default ControllerContainer;