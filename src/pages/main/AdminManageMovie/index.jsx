import React, { Component } from "react";
import Card from "../../../components/Card";
import axios from "../../../utils/axios";
import Pagination from "react-paginate";
import movie from "../../../store/reducer/movie";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Header from "../../Header";
import Footer from "../../Footer";
import spiderman from "../../../assets/image/Rectangle 119.1.png";

// import "./index.css";

class ManageMovie extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 2,
      limit: 10,
      pageInfo: {},
      form: {
        name: "",
        category: "",
        releaseDate: "",
        cast: "",
        director: "",
        duration: "",
        synopsis: "",
        image: null,
      },
    };
  }

  componentDidMount() {
    this.getDataMovie();
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  changeFile = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.files[0],
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.form);
    const formData = new FormData();
    // formData.append("name", this.state.form.name);
    for (const data in this.state.form) {
      formData.append(data, this.state.form[data]);
    }
    console.log(formData);
    console.log(formData.entries());
    // UNTUK MENGECEK DATA DI DALAM FORMDATA
    for (const data of formData.entries()) {
      // [
      //   [property, value],
      //   [],
      // ]
      console.log(data[0] + ", " + data[1]);
    }
    axios
      .post("http://localhost:3001/movie", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setUpdate = () => {
    console.log("setupdate");
  };

  handleUpdate = (id) => {
    console.log("handleupdate");
    this.props.history.push(`/managemovie/${id}`);
  };

  handleDelete = () => {
    console.log("handledelete");
  };

  getDataMovie = () => {
    axios
      .get(`movie?page=${this.state.page}&limit=${this.state.limit}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          data: res.data.data,
          pageInfo: res.data.pagination,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  handlePagination = (event) => {
    // console.log(event.selected + 1);
    const selectedPage = event.selected + 1;
    this.setState(
      {
        page: selectedPage,
      },
      () => {
        this.getDataMovie();
      }
    );
  };

  handleDetail = (data) => {
    // [1] = bisa digunakan biasanya untuk url params
    // this.props.history.push(`/basic-detail?movieId=${data}`);
    // [2] = bisa digunakan jika data tidak mau ditampilkan di url
    // this.props.history.push("/basic-detail", { movieId: data });
    // [3] =bisa digunakan untuk detail product/data
    this.props.history.push(`/basic-detail/${data}`);
    // console.log(data);
  };

  render() {
    const { data, pageInfo } = this.state;
    return (
      <div>
        <Header />
        <Container>
          <Row style={{ marginTop: "40px" }}>
            <Col sm={3}>
              <div className="border__manage">
                <img src={spiderman} alt="" />
              </div>
            </Col>
            <Col sm={4}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Movie Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Input Name ..."
                    name="name"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Director</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Input Director ..."
                    name="director"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Released Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="releaseDate"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col sm={4}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Input Category ..."
                    name="category"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Casts</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Input Cast ..."
                    name="cast"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Duration</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Input Duration ..."
                        name="duration"
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          <Row>
            <Form onSubmit={this.handleSubmit}>
              <input
                type="file"
                name="image"
                onChange={(event) => this.changeFile(event)}
              />
              <Form.Group
                className="mb-3 mt-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Synopsis</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  placeholder="Input Synopsis ..."
                  name="synopsis"
                  onChange={(event) => this.changeText(event)}
                />
              </Form.Group>

              <Col style={{ textAlign: "right" }}>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginRight: "20px" }}
                >
                  Submit
                </Button>
                <Button variant="primary" type="submit">
                  Reset
                </Button>{" "}
              </Col>
            </Form>
          </Row>
          <Row>
            {data.map((item) => (
              <div className="col-md-4" key={item.id}>
                <Card data={item} handleDetail={this.handleDetail} />
              </div>
            ))}
          </Row>
          <Pagination
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageInfo.totalPage}
            onPageChange={this.handlePagination}
            containerClassName={"pagination"}
            disabledClassName={"pagination__disabled"}
            activeClassName={"pagination__active"}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapDispatchToProps = { movie };

export default connect(mapStateToProps, mapDispatchToProps)(ManageMovie);
