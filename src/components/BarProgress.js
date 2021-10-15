import * as React from 'react';
import '../styles/BarProgress.css'

const BarProgress = ({ width, percent }) => {
    let progress = percent * width;

    return (
        <div className='progress-div'></div>
    )
};

export default BarProgress