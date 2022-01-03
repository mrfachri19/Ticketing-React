import React, { Component } from "react";
import Pagination from "react-paginate";

export class SchedulePagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: props.data,
      page: props.pageInfo.page,
      limit: props.pageInfo.limit,
      totalData: props.pageInfo.totalData,
      totalPage: props.pageInfo.totalPage
    };
  }

  render() {
    return (
      <>
        <Pagination
          previousLabel={null}
          nextLabel={null}
          breakLabel={"..."}
          pageCount={this.state.totalPage}
          onPageChange={this.props.handleSchedule}
          containerClassName={"schedule__pagination"}
          activeClassName={"schedule__pagination-button"}
        />
      </>
    );
  }
}

export default SchedulePagination;
