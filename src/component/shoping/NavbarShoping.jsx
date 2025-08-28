import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Container, Modal, Navbar, NavbarCollapse } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import CartProduct from "./CartProduct";

function NavbarShoping() {
  const [shoModal, setshowModal] = useState(false);

  const handelshow = () => {
    setshowModal(true);
  };
  const handelclose = () => {
    setshowModal(false);
  };


  const cart = useContext(CartContext);

  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <Navbar className=" border-bottom border-secondary">
        <Container>
          <NavbarCollapse className=" justify-content-end">
            <Button variant="btn btn-outline-secondary" className=" text-white" onClick={handelshow}>
              ({productCount}) <TiShoppingCart className=" mx-2" />
              سبد خرید{console.log(productCount)}
            </Button>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <Modal  show={shoModal} onHide={handelclose} className="my-modal" dir="rtl">
        <Modal.Header>
          <Modal.Body>
            {productCount > 0 ? (
              <>
                <h3 className='mb-4 text-secondary'>سبد خرید</h3>
                {cart.items.map((item) => (
                  <CartProduct key={item.id} id={item.id} quantity={item.quantity}>
                    {" "}
                  </CartProduct>
                ))}
                <h3 >مجموع قیمت : {cart.getTotalAmount()}</h3>
              </>
            ) : (
              <h3>سبد خرید خالی است</h3>
            )}
            <Button
              onClick={handelclose}
              variant='btn btn-outline-secondary'
              className='mt-4 mx-3'
            >
              بستن
            </Button>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default NavbarShoping;
