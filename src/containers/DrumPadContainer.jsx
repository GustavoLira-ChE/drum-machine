import React, {useContext} from 'react';
import ClipButton from '../components/ClipButton';
import HandleAppContext from '../context/HandleAppContext';

const DrumPadContainer = () => {
    const { bankUse } = useContext(HandleAppContext);
    return (
        <div className="col-4 d-flex flex-column gap-3 p-3">
            <div className="d-flex gap-3 " style={{width: "60%"}}>
            {bankUse.map((item,index) => index < 3 ?
                    <ClipButton info={item} key={item.id} /> : null
            )}
            </div>
            <div className="d-flex gap-3" style={{width: "60%"}}>
            {bankUse.map((item,index) => (index >= 3 && index < 6) ?
                    <ClipButton info={item} key={item.id} /> : null
            )}
            </div>
            <div className="d-flex gap-3" style={{width: "60%"}}>
            {bankUse.map((item,index) => (index >= 6 && index < 9) ?
                    <ClipButton info={item} key={item.id} /> : null
            )}
            </div>
        </div>
    );
};

export default DrumPadContainer;