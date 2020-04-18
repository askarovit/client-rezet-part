import React from 'react';
import './style.scss';

export const TextInput = (props) => {
    let formControl;

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    } else if (props.touched ) {
        formControl = 'form-control control-focus';
    } else {
        formControl = 'form-control';
    }


    return (
        <div className="input-form">
            <label htmlFor={`id_${props.name}`}>
                { props.label }{ props.isRequired && ' *' }
            </label>
            <input
                id={`id_${props.name}`}
                type={props.type || 'text'}
                name={props.name}
                className={formControl}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
            <div className='message-error'>
                {
                    (props.touched && !props.valid) &&
                    <span> Invalid {props.name} </span>
                }
            </div>
        </div>
    );
};
