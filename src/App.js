import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Container, Row, Col, Button} from "reactstrap";

import OrderItem from "./components/OrderItem";
import "./styles/App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_RECIPE' });
    dispatch({ type: 'GET_STORE' });
  }, []);

  const recipe = useSelector(state => state.recipe);
  const stores = useSelector(state => state.retail);
  const total = useSelector(state => state.sum);

  return (
    <Container fluid>
      {/* Header - Page Title */}
      <Row className="border-bottom">
        <Col className="text-center py-3">
          <h1>Order</h1>
        </Col>
      </Row>
      {/* Content - Order list */}
      <Row className="overflow-auto" style={{height: "calc(100vh - 220px)"}}>
        <Col>
          <Container fluid>
          {recipe.map((item, idx) => {
            return <OrderItem key={idx} item={item} stores={stores} itemId={idx}/>
          })}
          </Container>
        </Col>
      </Row>
      {/* Footer - Checkout Button */}
      <Row className="border-top">
        <Col className="text-center py-4">
          Total: ${total.toFixed(2)} <Button className="ml-4" color="primary">Checkout</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
