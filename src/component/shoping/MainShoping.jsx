import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "./ProductItem";
import { productlist } from "../../Services/Items";

function MainShoping() {
  return (
    <Container fluid className="py-5 px-3">
      <Row xs={1} lg={4} className=" g-4" >
        {
          productlist.map((item) => (
          <Col key={item.id} align="center">
            <ProductItem  product={item} />
          </Col>
        ))
        }
      </Row>
    </Container>
  );
}

export default MainShoping;
