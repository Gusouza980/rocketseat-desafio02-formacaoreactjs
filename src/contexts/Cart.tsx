import { createContext, useReducer } from "react";
import { Cart } from "../@types/cart";
import { cartReducer } from "../reducers/cart/reducer";
import { Product } from "../@types/product";
import { addItemAction, decrementItemQuantityAction, incrementItemQuantityAction, removeItemAction } from "../reducers/cart/actions";

interface CartContextType {
    cart: Cart;
    addItem: (product: Product) => void;
    removeItem: (itemId: string) => void;
    incrementItemQuantity: (itemId: string) => void;
    decrementItemQuantity: (itemId: string) => void;
    checkout: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartState, dispatch] = useReducer(cartReducer, {
        items: [],
    });

    const { items } = cartState;

    function addItem(product: Product) {
        dispatch(addItemAction(product));
    }

    function removeItem(itemId: string) {
        dispatch(removeItemAction(itemId));
    }

    function incrementItemQuantity(itemId: string) {
        dispatch(incrementItemQuantityAction(itemId));
    }

    function decrementItemQuantity(itemId: string) {
        dispatch(decrementItemQuantityAction(itemId));
    }

    return (
        <CartContext.Provider
            value={{
                cart: {
                    id: '1',
                    items,
                },
                addItem,
                removeItem,
                incrementItemQuantity,
                decrementItemQuantity,
                checkout: () => { },
            }}
        >
            {children}
        </CartContext.Provider>
    )
}