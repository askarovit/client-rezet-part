import React from 'react';
import './style.scss';

export const Select = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="select-form ">
            <span>{ props.label }</span>
            <select className={formControl} value={props.value} onChange={props.onChange} name={props.name}>
                {
                    props.options.map(option => (
                    <option value={option.value} key={option.value.toString()}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
        </div>
    );
};
