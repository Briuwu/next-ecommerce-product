"use client";

import { useState } from "react";
import Image from "next/image";
import { useProductContext } from "@/context/ProductContext";

const Cart = () => {
  const { cart, clearCart } = useProductContext();
  const [isOpen, setIsOpen] = useState(false);

  const totalPrice = cart.items * cart.price;
  return (
    <>
      <div className="relative">
        {cart.items !== 0 && (
          <p className="absolute -top-2 -right-2 bg-orange text-white px-2 rounded-full text-xs">
            {cart.items}
          </p>
        )}
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <Image
            src={"/images/icon-cart.svg"}
            width={22}
            height={20}
            alt="cart items"
          />
          <span className="sr-only">Cart</span>
        </button>
      </div>
      {isOpen && (
        <div className="grid absolute z-[9999] left-0 right-0 m-3 top-20 bg-white shadow-xl rounded-md md:max-w-sm md:right-0 md:left-auto">
          {cart.items !== 0 ? (
            <>
              <p className="font-bold p-6 border-b">Cart</p>
              <div className="p-6 pb-0 flex items-center gap-3 text-darkGrayishBlue">
                <Image
                  src={cart.img}
                  alt=""
                  width={50}
                  height={50}
                  className="object-contain rounded-md"
                />
                <div className="">
                  <p>{cart.title}</p>
                  <p>
                    ${cart.price} x {cart.items}{" "}
                    <span className="font-bold text-black">
                      ${totalPrice}.00
                    </span>
                  </p>
                </div>
                <button className="ml-auto" onClick={clearCart}>
                  <img src="/images/icon-delete.svg" alt="" />
                  <span className="sr-only">clear cart</span>
                </button>
              </div>
              <button className="bg-orange p-4 m-6 rounded-md font-bold text-white hover:opacity-50">
                Checkout
              </button>
            </>
          ) : (
            <p className="w-[328px] h-[250px] grid place-items-center text-darkGrayishBlue font-bold">
              Your Cart is empty
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
