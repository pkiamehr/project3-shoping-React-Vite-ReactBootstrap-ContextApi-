import { useContext } from "react";
import { Button } from "react-bootstrap";
import { getProductData } from "../../Services/Items";
import { CartContext } from "../../context/CartContext";

function CartProduct({ id, quantity }) {
  const productdata = getProductData(id);
  const cart = useContext(CartContext);
  return (
    <>
      <p>{productdata.title}</p>
      <p>تعداد: {quantity}</p>
      <p>قیمت: {quantity * productdata.price}</p>
      <Button
        size='sm'
        className='mb-5'
        variant='btn btn-outline-secondary'
        onClick={() => cart.deleteFromCart(id)}
      >
        حذف
      </Button>
    </>
  );
}

export default CartProduct;
