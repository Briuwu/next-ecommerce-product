"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface ProductContextProps {
  productCount: number;
  increment: () => void;
  decrement: () => void;
  cart: {
    title: string;
    img: string;
    price: number;
    items: number;
  };
  addToCart: (itemPrice: number, itemTitle: string, itemImg: string) => void;
  clearCart: () => void;
}

const ProductContext = createContext<ProductContextProps>({
  productCount: 0,
  increment: () => {},
  decrement: () => {},
  cart: {
    title: "",
    img: "",
    price: 0,
    items: 0,
  },
  addToCart: (itemPrice: number, itemTitle: string, itemImg: string) => {},
  clearCart: () => {},
});

export const ProductContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [productCount, setProductCount] = useState(0);
  const [cart, setCart] = useState({
    title: "",
    img: "",
    price: 0,
    items: 0,
  });

  const increment = () => setProductCount((prev) => prev + 1);

  const decrement = () => {
    if (productCount !== 0) setProductCount((prev) => prev - 1);
  };

  const addToCart = (itemPrice: number, itemTitle: string, itemImg: string) => {
    setCart({
      price: itemPrice,
      items: productCount,
      title: itemTitle,
      img: itemImg,
    });
    setProductCount(0);
  };

  const clearCart = () => {
    setCart({ price: 0, items: 0, title: "", img: "" });
  };

  return (
    <ProductContext.Provider
      value={{ productCount, increment, decrement, cart, addToCart, clearCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
