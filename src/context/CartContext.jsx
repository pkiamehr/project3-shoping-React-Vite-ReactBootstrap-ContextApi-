import { createContext, useState } from "react";
import { getProductData } from "/src/Services/Items.js";

export const CartContext = createContext({
  items : [],
  getProductQuantity: () => {},
  addItemTocart: () => {},
  removeItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalAmount: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartproducts] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find((item) => item.id === id)?.quantity;

    if (quantity === undefined) {
      return 0
    }
    return quantity
  }
  
  function addItemTocart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartproducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartproducts(
        cartProducts.map((item) => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
        )
    }
  }

  function deleteFromCart(id) {
    setCartproducts((cartProducts) => 
    cartProducts.filter((item) => {
        return item.id != id;
      })
    )
  }

  function removeItemFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartproducts(
        cartProducts.map((item) => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        )
    }
  }
  function getTotalAmount() {
    let totalAmount = 0

    cartProducts.map((item) => {
      const productData = getProductData(item.id)

      totalAmount += productData.price * item.quantity
    })

    return totalAmount
  }



  const Contextvalue = {
    items: cartProducts,
    getProductQuantity,
    addItemTocart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount,
  }
  return (
  <CartContext.Provider value={Contextvalue}>{children}</CartContext.Provider>)
}
