import { useContext } from "react";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Form, Row } from "react-bootstrap";

import { CartContext } from "/src/context/CartContext";

function ProductItem({product}) {

  const cart = useContext(CartContext)

  const ProductQuantity = cart.getProductQuantity(product.id)

  return (
        <Card   className=" mt-5 p-3" style={{backgroundColor:"#1a1c1e"}}>
          <CardImg variant="top"  src={product.image} height="200px" style={{objectFit:"cover"}}></CardImg>
          <CardBody className="">
            <CardTitle className=" text-light pt-4" align="right">{product.title}</CardTitle>
            <CardText className=" text-light" align="right" dir="ltr"> {product.price} تومان</CardText>
            {ProductQuantity > 0 ? (<>
              <Form as={Row}>
              <Form.Label className=" text-white" column="true" sm={6}>
              تعداد: {ProductQuantity}
              </Form.Label>
              <Col sm={6}>

              <Button sm={6}  variant="btn btn-outline-secondary" className=" mx-2 text-white" onClick={ () => cart.addItemTocart(product.id)}>+</Button>
              <Button sm={6} variant="btn btn-outline-secondary" className=" mx-2 text-white" onClick={ () => cart.removeItemFromCart(product.id)}>-</Button>
              </Col>

              </Form>
              <Button variant="btn btn-light" className=" my-4" onClick={() => cart.deleteFromCart(product.id)}>حذف از سبد خرید</Button>
            </>) :            
               <Button variant="btn btn-outline-secondary" className="text-light" onClick={ () => cart.addItemTocart(product.id)}>افزودن به سبد خرید</Button>

            }
          </CardBody>
        </Card>
  );
}

export default ProductItem;
