import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { increaseCounter } from "../../../store/actions/counter";
import Navbar from "../../../components/Navbar";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isShow: true,
    };
  }

  increaseCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decreaseCounter = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  componentDidMount() {
    console.log("Didmount is running");
    console.log(this.props.counter);
  }

  componentDidUpdate() {
    console.log("Didupdate is running");
  }

  // componentWillUnmount() {
  //   console.log("WillUnmount is running");
  // }

  render() {
    const { count, disabled } = this.props.counter;
    return (
      <Container className="text-center">
        <h2>Counter App</h2>
        {this.state.isShow && <Navbar />}
        <button
          onClick={() => {
            this.setState({ isShow: !this.state.isShow });
          }}
        >
          Show Navbar
        </button>
        <h3>{count}</h3>
        <Button variant="primary" onClick={this.decreaseCounter}>
          -
        </Button>

        <Button variant="secondary" className="mx-2">
          RESET
        </Button>
        {!disabled && (
          <Button
            variant="primary"
            onClick={() => this.props.increaseCounter(2)}
          >
            +
          </Button>
        )}
      </Container>
    );
  }
}
// =====
const mapStateToProps = (state) => ({
  counter: state.counter,
  // properti digunakan untuk pemanggilan data di dalam jsx
  // value harus mengambil dari reducer
  // counter: {
  //   count: 0
  // }
});

const mapDispatchToProps = {
  increaseCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// =====
