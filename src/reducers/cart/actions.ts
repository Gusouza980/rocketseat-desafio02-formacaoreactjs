import { Product } from "../../@types/product"

export enum ActionTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
    INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY',
    DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY',
    CHECKOUT = 'CHECKOUT',
}

export interface CartAction {
    type: ActionTypes;
    payload: object;
}

export function addItemAction(product: Product) {
    return {
        type: ActionTypes.ADD_PRODUCT,
        payload: {
            product,
        },
    }
}

export function removeItemAction(itemId: string) {
    return {
        type: ActionTypes.REMOVE_CART_ITEM,
        payload: {
            itemId,
        },
    }
}

export function incrementItemQuantityAction(itemId: string) {
    return {
        type: ActionTypes.INCREMENT_CART_ITEM_QUANTITY,
        payload: {
            itemId,
        },
    }
}

export function decrementItemQuantityAction(itemId: string) {
    return {
        type: ActionTypes.DECREMENT_CART_ITEM_QUANTITY,
        payload: {
            itemId,
        },
    }
}
