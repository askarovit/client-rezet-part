import { GET_CARTS, GET_CARTS_SUCCEEDED, GET_CARTS_FAILED, CHOOSE_CARTS } from '../types/carts';

export const getCarts = () => {
    return {
        type: GET_CARTS
    }
};

export const getCartsSuccessAction = (payload) => {
  return {
    type: GET_CARTS_SUCCEEDED,
    payload
  };
};

export const getCartsFailedAction = (payload) => {
  return {
    type: GET_CARTS_FAILED,
    payload
  };
};


export const chooseCarts = (cartId, value, amount) => {
    return {
        type: CHOOSE_CARTS,
        payload: {
            value: value || 0,
            cartId,
            amount
        }
    }
};