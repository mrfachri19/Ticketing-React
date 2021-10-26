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
      pageInfo: {}
    };
  }

  componentDidMount() {
    this.getDataMovie();
  }

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
