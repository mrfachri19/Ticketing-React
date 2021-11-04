import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { increaseCounter } from "../../../Stores/actions/counter";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  // index 0 = untuk pemanggilan data di dalam jsx
  // index 1 = untuk proses manipulasi data dari index 0

  const increaseCounter = () => {
    setCount(count + 1);
  };

  // componentDidMount
  useEffect(() => {
    checkingData();
    console.log("Didmount is running");
  }, []);

  const checkingData = () => {
    if (count === 5) {
      alert("Your count is 5");
    }
  };

  // componentDidUpdate
  useEffect(() => {
    console.log("Didupdate is running");
  }, [count]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("WillUnmount is running");
    };
  }, []);

  return (
    <Container className="text-center">
      <h2>Counter App</h2>
      <h3>{props.counter.count}</h3>
      <Button variant="primary">-</Button>
      <Button variant="secondary" className="mx-2">
        RESET
      </Button>
      <Button variant="primary" onClick={() => props.increaseCounter(2)}>
        +
      </Button>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = {
  increaseCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
