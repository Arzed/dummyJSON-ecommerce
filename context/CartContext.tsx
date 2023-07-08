'use client'

import { IProduct, CartContextState } from '@/types/index';
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
  const [savedProduct, setSavedProduct] = useState<IProduct[]>([]);

  const addProduct = (product: IProduct) => {
    setSavedProduct([...savedProduct, { ...product }]);
  };

  const removeProduct = (productName: string) => {
    setSavedProduct(savedProduct.filter((product) => product.id !== product.id));
  }

  return (
    <ProductContext.Provider value={{savedProduct, addProduct, removeProduct}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;