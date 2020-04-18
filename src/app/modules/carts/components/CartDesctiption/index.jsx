import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const CartDescriptionComponent = (props) => {
    return (
        <div className='cart-description-container'>
            { props.children }
        </div>
    )
};

CartDescriptionComponent.propTypes = {
    children: PropTypes.element.isRequired
};