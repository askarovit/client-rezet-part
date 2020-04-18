import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

export const CartImageComponent = ({icon}) => {
    return (
        <div className='cart-image-container'>
            <img src={icon} alt='product'/>
        </div>
    )
};

CartImageComponent.propTypes = {
    icon: PropTypes.string.isRequired
};