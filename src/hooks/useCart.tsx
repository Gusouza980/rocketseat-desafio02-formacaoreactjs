import { useContext } from 'react'

import { CartContext } from '../contexts/Cart'

export function useCart() {
  return useContext(CartContext)
}