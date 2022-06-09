import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';
const backdrop = props=>{
    return(
    ReactDOM.createPortal(
        <div className={['backdrop'].join(' ')} onClick={props.onClick}/>,
        document.getElementById('backdrop-root')
    )
    );
}
export default backdrop;