import React, { useRef } from "react";
import PropTypes from "prop-types";

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default function Counter({min = 1, max, current, onChange}) {

    let inp = useRef();
    console.log(inp);
    let updInp = num => inp.current.value = num;
    const aplayClick = (value) => {
        onChange(value > min ? Math.min(value, max) : Math.max(value, min));
        updInp(value > min ? Math.min(value, max) : Math.max(value, min));
    };
    const inc = () => {
            aplayClick(++current);
        };
    const dec = () => {
        aplayClick(--current)
    };
    const inpStr = (e) => {
        let value = parseInt(e.target.value);
        let current = isNaN(value) ? min : value;
        aplayClick(current);
    };
    
    return <div>
        <button onClick={dec}>-</button>
        <input ref={inp} defaultValue={current} onBlur={inpStr} />
        <button onClick={inc}>+</button>
    </div>
}