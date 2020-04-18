import { GET_CARTS, CHOOSE_CARTS } from '../types/carts';

export const getCarts = ({ limit, page }) => {
    return {
        type: GET_CARTS,
        payload: {
            limit: limit || 30,
            page: page || 1
        }
    }
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