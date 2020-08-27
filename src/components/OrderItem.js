import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";

import {Row, Col, Button, Input} from "reactstrap";

import StoreDropdown from "./StoreDropdown";

function OrderItem(props) {
  const dispatch = useDispatch();
  const {
    item: {item, amount},
    stores,
    itemId
  } = props;
  const [retail, setRetail] = useState(
    stores.length
      ? stores[0]
      : {
          store: "No Store",
          delivery: 0,
          price: 0.0
        }
  );
  const [price, setPrice] = useState(parseFloat(retail.price) * (amount/100));

  useEffect(() => {
    dispatch({ type: 'TOTAL', payload: price });
  }, [])

  useEffect(() => {
    const newPrice = parseFloat(retail.price) * (amount/100);
    if(price !== newPrice) {
      dispatch({ type: "CHANGE_TOTAL", payload: newPrice - price});
      setPrice(newPrice);
    }
  }, [amount, retail.price])


  return (
    <Row className="my-2 py-3 justify-content-center rounded order-item">
      <Col xs="auto">
        <img src="logo192.png" width="30px" height="30px" alt="Ingredient" />
      </Col>
      <Col className="my-auto" xs={3} sm={2} md={3} lg={4}>
        {item}
      </Col>
      <Col className="my-auto d-flex" xs={2} sm={3} md={2} lg={2}>
        <Input type="number" step="1" defaultValue={amount} onChange={(evt) => {
          dispatch({ type: 'CHANGE_AMOUNT', payload: {id: itemId, amt: evt.target.value}})
        }}/> <span className="p-2">g</span>
      </Col>
      <Col xs={2} sm={3} md={3} lg={2}>
        <StoreDropdown stores={stores} setRetail={setRetail} retail={retail} />
      </Col>
      <Col className="my-auto" xs={2} sm={1} md={1} lg={1}>
        {retail.delivery} hrs
      </Col>
      <Col className="my-auto text-right" xs={1} sm={1} md={1} lg={1} >
        ${price.toFixed(2)}
      </Col>
      <Col xs="auto">
        <Button
          className="align-middle mt-1"
          close
          onClick={() => {
            dispatch({type: "REMOVE_RECIPE", payload: itemId});
            dispatch({ type: "CHANGE_TOTAL", payload: -parseInt(price)})
          }}
        />
      </Col>
    </Row>
  );
}

OrderItem.propTypes = {
  stores: PropTypes.arrayOf(
    PropTypes.shape({
      store: PropTypes.string,
      delivery: PropTypes.number,
      price: PropTypes.number
    })
  ),
  item: PropTypes.shape({
    item: PropTypes.string,
    amount: PropTypes.number
  })
};

export default OrderItem;
