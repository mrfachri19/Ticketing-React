import React, { Component } from "react";
import Navbar from "../../../components/Navbar";
import Card from "../../../components/Card";
import axios from "../../../utils/axios";
import Pagination from "react-paginate";

class Home extends Component {
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
        image: null
      }
    };
  }

  componentDidMount() {
    this.getDataMovie();
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  };

  changeFile = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.files[0]
      }
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

  handleUpdate = () => {
    console.log("handleupdate");
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
          pageInfo: res.data.pagination
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
        page: selectedPage
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
    // console.log(this.state.data);
    const { data, pageInfo } = this.state;
    return (
      <div className="container text-center">
        <h1>Home Page</h1>
        <Navbar />
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Input Name ..."
            name="name"
            onChange={(event) => this.changeText(event)}
          />
          <br />
          <input
            type="text"
            placeholder="Input Category ..."
            name="category"
            onChange={(event) => this.changeText(event)}
          />
          <br />
          <input type="date" name="releaseDate" onChange={(event) => this.changeText(event)} />
          <br />
          <input
            type="text"
            placeholder="Input Cast ..."
            name="cast"
            onChange={(event) => this.changeText(event)}
          />
          <br />
          <input
            type="text"
            placeholder="Input Director ..."
            name="director"
            onChange={(event) => this.changeText(event)}
          />
          <br />
          <input
            type="text"
            placeholder="Input Duration ..."
            name="duration"
            onChange={(event) => this.changeText(event)}
          />
          <br />
          <input
            type="text"
            placeholder="Input Synopsis ..."
            name="synopsis"
            onChange={(event) => this.changeText(event)}
          />
          <br />
          <input type="file" name="image" onChange={(event) => this.changeFile(event)} />
          <br />
          <button type="submit">Submit</button>
        </form>
        <hr />
        <div className="row">
          {data.map((item) => (
            <div className="col-md-4" key={item.id}>
              <Card data={item} handleDetail={this.handleDetail} />
            </div>
          ))}
        </div>
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
      </div>
    );
  }
}

export default Home;
