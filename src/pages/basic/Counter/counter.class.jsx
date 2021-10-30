import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { increaseCounter } from "../../../Stores/actions/counter";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increaseCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  componentDidMount() {
    console.log(this.props.counter);
  }

  componentDidUpdate() {
    console.log("didupdate is running");
  }

  componentWillUnmount() {
    console.log("willmount is running");
  }

  render() {
    const { count } = this.props.counter;
    return (
      <Container className="text-center">
        <h2>Counter App</h2>
        <h3>{count}</h3>
        <Button variant="primary">-</Button>
        <Button variant="secondary" className="mx-2" onClick={this.increaseCounter}>
          RESET
        </Button>
        <Button variant="primary" onClick={this.props.increaseCounter}>
          +
        </Button>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  increaseCounter
};

const mapStateToProps = (state) => ({
  counter: state.counter
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
