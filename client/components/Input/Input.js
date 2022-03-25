/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import style from './input.module.scss';

function Input(inpDetail) {
    const [focus, setFocus] = useState(false);
    const { label, errMsg, onChange, ...others } = inpDetail;

    const handleBlur = () => {
        setFocus(true);
    };

    return (
        <div className={style.input_div}>
            <label>{label}:</label>
            <input
                {...others}
                onChange={onChange}
                className={style.input}
                onBlur={handleBlur}
                focused={focus.toString()}
                onFocus={() => others.name === 'confirmpass' && setFocus(true)}
            />
            <span>{errMsg}</span>
        </div>
    );
}

export default Input;
