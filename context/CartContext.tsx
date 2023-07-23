'use client'

import { IProduct, CartContextState, SavedProduct } from '@/types/index';
import { createContext, useContext, useState } from 'react'

const contextDefaultValues: CartContextState = {
  savedProduct: [],
  addProduct: () => {},
  removeProduct: () => {}
};

export const ProductContext = createContext<CartContextState>(contextDefaultValues);

type ProductProviderProps = {
  children: React.ReactNode
}

const ProductProvider = ({children}: ProductProviderProps) => {
  const [savedProduct, setSavedProduct] = useState<SavedProduct[]>([]);

  const addProduct = (product: IProduct, qty:  number) => {
    setSavedProduct([...savedProduct, { ...product, qty }]);
  };

  const removeProduct = (productName: string) => {
    setSavedProduct(savedProduct.filter((product) => product.title !== productName));
  }

  return (
    <ProductContext.Provider value={{savedProduct, addProduct, removeProduct}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;