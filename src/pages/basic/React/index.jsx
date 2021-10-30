import React, { Component } from "react";
import Navbar from "../../../components/Navbar";
import styles from "./BasicReact.module.css";
import { Button, Modal } from "react-bootstrap";
// import CardMovie from "../../../components/Card";

class BasicReact extends Component {
  constructor() {
    super();
    // console.log("CONSTRUCTOR IS RUNNING !");
    this.state = {
      name: "Bagus",
      data: [],
      search: "",
      show: false
    };
    this.handleClick3 = this.handleClick3.bind(this);
  }
  // LIFECYCLE
  componentDidMount() {
    // console.log("COMPONENT DIDMOUNT IS RUNNING !");
    // GET DATA
    this.setState({
      data: [
        {
          movieId: 1234,
          movieName: "Spiderman"
        },
        {
          movieId: 6789,
          movieName: "Batman"
        }
      ]
    });
  }
  componentDidUpdate() {
    //ketika data/element terupdate
    // console.log("COMPONENT DIDUPDATE IS RUNNING");
    // this.setState({
    //   name: "Bagus Tri Harjanto"
    // });
  }
  componentWillUnmount() {
    //ketika data/element terhapus/menghilang
    // console.log("COMPONENT WILLUNMOUNT IS RUNNING");
  }
  handleClick = (data) => {
    console.log("Click !");
  };
  handleClick2 = (data) => {
    // console.log(this);
    console.log("Click with Data = " + data);
  };
  handleClick3() {
    console.log(this);
    console.log("Click 3");
  }

  changeText = (event) => {
    console.log(event.target.value);
    console.log(event);
    this.setState({
      search: event.target.value
    });
  };
  handleSearch = (event) => {
    if (event.key === "Enter") {
      console.log("User Press Enter !");
      this.setState({
        search: event.target.value
      });
      this.props.history.push(`/basic-react?search=${event.target.value}`);
    }
  };

  handleShow = () => {
    this.setState({
      show: true
    });
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleUpdateMovie = (data) => {
    console.log("MOVIE IS UPDATE", data);
  };

  render() {
    // console.log("RENDER JSX IS RUNNING !");
    // console.log(this.state.data)
    return (
      <>
        <h1>Basic React Page !</h1>
        <Navbar name="Bagus TH" />
        <h1>{this.state.name}</h1>
        {/* MAPPING */}
        {this.state.data.map((item, index) => (
          <div key={item.movieId}>
            <h2>{item.movieName}</h2>
          </div>
        ))}
        {/* EVENT */}
        <button onClick={this.handleClick}>Click Me 1</button>
        <button onClick={() => this.handleClick2(1)}>Click Me 2</button>
        <button onClick={this.handleClick3}>Click Me 3</button>
        <hr />
        <input
          type="text"
          placeholder="Search ..."
          name="search"
          onChange={(event) => this.changeText(event)}
        />
        <h5>Your keyword search is {this.state.search}</h5>
        <input type="text" placeholder="Search ..." name="search" onKeyPress={this.handleSearch} />

        {/* onchange = akan berjalan setiap user memasukkan nilai kedalm form input */}
        {/* onKeyPress = sama seperti onchange tetapi bisa diberikan tambahan kondisi ketika dijalankan */}
        <hr />
        {/* CONDITIONAL */}
        {/* SHORT LOGIC */}
        {this.state.search && <h5>Your keyword search is {this.state.search}</h5>}
        {/* TERNARY */}
        {this.state.data.length > 0 ? (
          this.state.data.map((item, index) => (
            <div key={item.movieId}>
              <h2>{item.movieName}</h2>
            </div>
          ))
        ) : (
          <h5>Data Not Found !</h5>
        )}
        <hr />
        {/* STYLE IN REACT */}
        <h1 className={`${styles.header_title} ${styles.headerTitleSize} text-center`}>
          Hello World
        </h1>
        {/* BOOTSTRAP */}
        <button className="btn btn-primary">Primary</button>
        <Button variant="primary">Primary</Button>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <hr />
        {/* COMPONENT COMUNICATION */}
        {/* <CardMovie handleUpdate={this.handleUpdateMovie} /> */}
      </>
    );
  }
}

export default BasicReact;
