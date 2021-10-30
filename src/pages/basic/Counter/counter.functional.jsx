import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const Counter = () => {
  const { count, setCount } = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("didmount is running");
  }, []);

  useEffect(() => {
    console.log("didupdate is running");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("willlmount is running");
    };
  }, []);

  return (
    <Container className="text-center">
      <h2>Counter App</h2>
      <h3>{count}</h3>
      <Button variant="primary">-</Button>
      <Button variant="secondary" className="mx-2">
        RESET
      </Button>
      <Button variant="primary" onClick={this.increaseCounter}>
        +
      </Button>
    </Container>
  );
};

export default Counter;
