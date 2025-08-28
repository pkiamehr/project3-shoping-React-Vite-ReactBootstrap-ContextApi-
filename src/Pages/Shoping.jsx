import { Col, Container, Row } from "react-bootstrap";
import NavbarShoping from "../component/shoping/NavbarShoping"
import MainShoping from "../component/shoping/MainShoping"
import { CartProvider } from "../context/CartContext";

function Shoping() {
  return (
    <CartProvider>
      <Container style={{ background: "#111", color: "#fafafa" }} className=" min-vh-100 " fluid>
        <Row>
          <Col>
            <NavbarShoping />
          </Col>
        </Row>
        <Row>
          <Col>
            <MainShoping />
          </Col>
        </Row>
      </Container>
    </CartProvider>
  );
}

export default Shoping;
