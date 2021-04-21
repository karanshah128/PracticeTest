import React, { useState } from 'react';
import useGlobalState from '../../../Context';
import '../../../css/main.css';
import '../Css/DropDown.css'

const DropDown = (props) => {

    const search = (e) => {
        props.onClose(e.target.value)
    }




    return (
        <>
            <select className="form-control" onChange={(e) => search(e)}>
                <option>Select</option>
                <option>Option 1</option>
                <option>Option 2</option>

            </select>


            <br />




        </>
    )
}

export default DropDown