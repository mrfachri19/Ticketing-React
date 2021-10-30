import React, { Component } from "react";
import Navbar from "../../../components/Navbar";
import Card from "../../../components/Card";
import axios from "../../../utils/axios";
import Pagination from "react-paginate";
import "./index.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      limit: 3,
      pageInfo: {},
      form: {
        name: "",
        category: "",
        realeasedDate: "",
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
    const formData = new formData();

    for (const data in this.state.form) {
      formData.append(data, this.state.form[data]);
    }
    // for (const pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    // axios.post("movie", formData)
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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Input Name..."
            name="name"
            onChange={(event) => this.changeText(event)}
          />
          <br />
          <input
            type="text"
            placeholder="Input category..."
            name="category"
            onChange={(event) => this.changeText(event)}
          />
          <br />
          <input
            type="date"
            placeholder="Input Released date..."
            name="name"
            onChange={(event) => this.changeText(event)}
          />
          <br />
          <input
            type="text"
            placeholder="Input Sinopsis..."
            name="name"
            onChange={(event) => this.changeText(event)}
          />
          <br />
          <input
            type="file"
            placeholder="Input image..."
            name="image"
            onChange={(event) => this.changeFile(event)}
          />
          <br />
        </form>
        <hr />
        <div className="row">
          {data.map((item) => (
            <div className="col-md-4 item" key={item.id}>
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
