import React from 'react';
import './colorBox.scss'
const ColorBox = (props) => {
    return (
        <div className="box" style={{backgroundColor: props.code}} ></div>
    )
}

export default ColorBox;