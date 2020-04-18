import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { CartImageComponent } from '../CartImage';
import { CartDescriptionComponent } from '../CartDesctiption';
import { CartCalculationComponent } from '../CartCalculation'
import Skeleton from 'react-loading-skeleton';

const useStyles = (isDesktop) => {
    const style = !!isDesktop ? require('./style/desktop.theme').style : require('./style/mobile.theme').style;
    return makeStyles(style)();
};

export const CartItemComponent = (props) => {
    const { price, onChangeTotalPrice, title, description, icons, id, isDesktop } = props;
    const [amount, setAmount] = useState(0);
    const classes = useStyles(isDesktop);

    const handleIncrease = () => {
      if(amount === 50) {
          return false;
      }
        setAmount(amount + 1);
        onChangeTotalPrice(id, price, amount + 1);
    };
    const handleDecrease = () => {
       if (amount === 0) {
           return false;
       }
       setAmount(amount - 1);
       onChangeTotalPrice(id, price * (-1), amount - 1);
    };
    const handleClearTrash = () => {
        if (amount === 0) {
            return false;
        }
        setAmount(0);
        onChangeTotalPrice(id, price * (amount * -1), 0);
    };

    return (
        <div className={classes.cartContainer}>
            <div className={classes.part_image}>
                <CartImageComponent icon='https://localhost:433/svg/product.svg' />
            </div>
            <div className={classes.part_description}>
                <CartDescriptionComponent>
                    <>
                        <span>{ title }</span>
                        {  description || <Skeleton count={3}/> }
                    </>
                </CartDescriptionComponent>
            </div>
            <div className={classes.part_calculation}>
                <CartCalculationComponent
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onClear={handleClearTrash}
                    amount={amount}
                    price={price}
                    icons={icons}
                />
            </div>

        </div>
    )
};

CartItemComponent.propTypes = {
    onChangeTotalPrice: PropTypes.func.isRequired,
    price: PropTypes.number,
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    icons: PropTypes.object
};
