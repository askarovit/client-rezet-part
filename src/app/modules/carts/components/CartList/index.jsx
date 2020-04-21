import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CartItemComponent } from '../CartItem';
import { getCarts, chooseCarts } from '../../../../../core/actions/carts';
import './style.scss';

 const CartListComponent = (props) => {
     const dispatch = useDispatch();
     const {
         carts: { carts, order: { totalAmount } }
     } = useSelector(state => state);

     useEffect(() => {
       dispatch(getCarts());
     }, [dispatch]);

     const handleChangePrice = (cartId, value, amount) => {
         dispatch(chooseCarts(cartId, value, amount))
     };

     return (
        <>
            {
              carts.length > 0 && <> {
                  carts.map(cart =>
                    <Fragment key={cart.id}>
                      <CartItemComponent
                        {...cart}
                        isDesktop={props.isDesktop}
                        icons={{
                          trash: 'https://localhost:9871/svg/trash.svg',
                          minus: 'https://localhost:9871/svg/minus.svg',
                          plus: 'https://localhost:9871/svg/plus.svg',
                          currency: 'https://localhost:9871/svg/euro.svg'
                        }}
                        i
                        onChangeTotalPrice={handleChangePrice}
                      />
                    </Fragment>
                  )
                }
                  <div className='totalCalculate'>
                    <div>
                      <span>{ totalAmount }</span>
                      <img src='https://localhost:9871/svg/euro.svg' width='24' height='24' alt='currency'/>
                    </div>
                    <div>
                      <Link to={'/shipping'}>
                        <button type='button'>BUY</button>
                      </Link>
                    </div>
                  </div>
                </>
          }
        </>
  )
};

export default CartListComponent;