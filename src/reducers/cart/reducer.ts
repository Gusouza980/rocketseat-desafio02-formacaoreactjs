import { produce } from "immer";
import { CartItem } from "../../@types/cart";
import { ActionTypes, CartAction } from "./actions";
import { Product } from "../../@types/product";



export interface Order {
    id: string;
    items: CartItem[];
}

interface CartState {
    items: CartItem[];
}

function createCartItem(product: Product, quantity: number) {
    return {
        id: new Date().getTime().toString(),
        product,
        quantity,
    } satisfies CartItem;
}

export function cartReducer(state: CartState, action: CartAction) {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT: {
            return produce(state, (draft) => {
                const isProductInCart = draft.items.find(
                    (item: CartItem) => item.product.id === action.payload.product.id
                );

                if (isProductInCart) {
                    isProductInCart.quantity += action.payload.quantity;
                } else {
                    draft.items.push(createCartItem(action.payload.product, action.payload.quantity));
                }
            }
            );
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