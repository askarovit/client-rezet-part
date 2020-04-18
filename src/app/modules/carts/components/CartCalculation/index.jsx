import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const CartCalculationComponent = (props) => {
    const { onClear, onDecrease, onIncrease, amount, icons, price } = props;
    const calculatePrice = () => !!amount ? amount * price : price;

    return (
        <>
            <div className='cart-item-clear'>
                <img
                    onClick={onClear}
                    src={icons.trash}
                    alt={'trash'}
                    width='24'
                    height='24' />
            </div>
            <div className='calculation-form'>
                <div>
                    <img
                        onClick={onDecrease}
                        src={icons.minus}
                        alt={'trash'}
                    />
                </div>
                <div>
                    <span> { amount } </span>
                </div>
                <div>
                    <img
                        onClick={onIncrease}
                        src={icons.plus}
                        alt={'trash'}
                    />
                </div>
                <div>
                    <span>{ calculatePrice() || 0 }</span>
                    <img
                        src={icons.currency}
                        alt={'currency'}
                    />
                </div>
            </div>
        </>
    )
};

CartCalculationComponent.propTypes = {
    onIncrease: PropTypes.func.isRequired,
    onDecrease: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    icons: PropTypes.exact({
        plus: PropTypes.string,
        minus: PropTypes.string,
        trash: PropTypes.string,
        currency: PropTypes.string
    }),
    amount: PropTypes.number,
    price: PropTypes.number
};