import { Product } from "../../@types/product"

export enum ActionTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
    INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY',
    DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY',
    CHECKOUT = 'CHECKOUT',
}

export type CartAction = 
    | {
        type: ActionTypes.ADD_PRODUCT,
        payload: {
            product: Product,
            quantity: number,
        },
    }
    | {
        type: ActionTypes.REMOVE_CART_ITEM,
        payload: {
            itemId: string,
        },
    }
    | {
        type: ActionTypes.INCREMENT_CART_ITEM_QUANTITY,
        payload: {
            itemId: string,
        },
    }
    | {
        type: ActionTypes.DECREMENT_CART_ITEM_QUANTITY,
        payload: {
            itemId: string,
        },
    }
    | {
        type: ActionTypes.CHECKOUT,
    }

export function addItemAction(product: Product, quantity: number) {
    return {
        type: ActionTypes.ADD_PRODUCT,
        payload: {
            product,
            quantity,
        },
    } satisfies CartAction
}

export function removeItemAction(itemId: string) {
    return {
        type: ActionTypes.REMOVE_CART_ITEM,
        payload: {
            itemId,
        },
    } satisfies CartAction
}

export function incrementItemQuantityAction(itemId: string) {
    return {
        type: ActionTypes.INCREMENT_CART_ITEM_QUANTITY,
        payload: {
            itemId,
        },
    } satisfies CartAction
}

export function decrementItemQuantityAction(itemId: string) {
    return {
        type: ActionTypes.DECREMENT_CART_ITEM_QUANTITY,
        payload: {
            itemId,
        },
    } satisfies CartAction
}
