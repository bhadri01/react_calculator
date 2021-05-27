import React from 'react';
import ScreenRow from './Outputscreenrow';

const OutputScreen = (props) =>{
    return(
        <div className="screen">
            <ScreenRow value={props.question} />
            <ScreenRow value={props.answer} key="answer"/>
        </div>
    );
};

export default OutputScreen;