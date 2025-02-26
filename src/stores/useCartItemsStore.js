// Make sure this import is correct
import { assoc, dissoc } from "ramda";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartItemsStore = create(
  persist(
    set => ({
      cartItems: {},

      setSelectedQuantity: (slug, quantity) =>
        set(({ cartItems }) => {
          if (quantity <= 0) {
            return { cartItems: dissoc(slug, cartItems) };
          }

          return { cartItems: assoc(slug, String(quantity), cartItems) };
        }),

      removeCartItem: slug =>
        set(state => ({
          cartItems: dissoc(slug, state.cartItems),
        })),
    }),
    { name: "cart-items-store" }
  )
);

export default useCartItemsStore;
