import React from 'react';
import './colorBox.scss'
const ColorBox = (props) => {
    const { data } = props
    return (
        <>
            <div className="box" style={{ backgroundColor: data.code }} ></div>
            <p style={{marginBottom:'0px'}}>{data.name}</p>
            <p>{data.code}</p>
        </>
    )
}

export default ColorBox;