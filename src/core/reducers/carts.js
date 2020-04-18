import { cartsMock } from '../mock/carts'
import { GET_CARTS, CHOOSE_CARTS } from '../types/carts';

const initialState = {
  carts: [],
  order: {
    carts: {},
    totalAmount: 0
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
      case GET_CARTS:
        return {...state, carts: cartsMock};

      case CHOOSE_CARTS:
        const { order: { carts }, order: { totalAmount } } = state;
        const orderUpdate = {
          totalAmount: totalAmount + payload.value,
          carts: {
              ...carts,
              [payload.cartId]: { amount: payload.amount }
          }
        };

      return { ...state, order: orderUpdate };
    default:
      return { ...state };
  }
};