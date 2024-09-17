import { CartItem } from "../../@types/cart";
import { ActionTypes, CartAction } from "./actions";



export interface Order {
    id: string;
    items: CartItem[];
}

interface CartState {
    items: CartItem[];
}

export function cartReducer(state: CartState, action: CartAction) {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT: {
            return state;
            break;
        }
        case ActionTypes.REMOVE_CART_ITEM: {
            return state;
            break;
        }
        case ActionTypes.INCREMENT_CART_ITEM_QUANTITY: {
            return state;
            break;
        }
        case ActionTypes.DECREMENT_CART_ITEM_QUANTITY: {
            return state;
            break;
        }
        case ActionTypes.CHECKOUT: {
            return state;
            break;
        }
        default: {
            return state;
        }
    }
}