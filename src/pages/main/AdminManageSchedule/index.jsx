import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../Header";
import Footer from "../../Footer";
import spiderman from "../../../assets/image/Rectangle 119.1.png";
import vektor from "../../../assets/image/Vector13.png";

// import "./index.css";

const ManageMovie = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row style={{ marginTop: "40px" }}>
          <div>
            <Col sm={3}>
              <div className="border__manage">
                <img src={spiderman} alt="" />
              </div>
            </Col>
          </div>
        </Row>
        <div className="row">
          <div className="col-sm-12 showtime">
            <h3 style={{ textAlign: "left", marginBottom: "20px" }}>Data Schedule</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 dates"></div>
        </div>

        <div className="row kartu1">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-4 kartu1">
                    <img src={vektor} alt="" />
                  </div>
                  <div className="col-sm-8">
                    <h6>ebv.id</h6>
                    <p>
                      Whatever street No.12, <br /> South Purwokerto
                    </p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <p>Price</p>
                  </div>
                  <div className="col-sm-6">
                    <h6>$10.00/seat</h6>
                  </div>
                </div>

                <div className="row">
                  <button className="btn btn-primary" type="button">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-4 kartu1">
                    <img src={vektor} alt="" />
                  </div>
                  <div className="col-sm-8">
                    <h6>ebv.id</h6>
                    <p>
                      Whatever street No.12, <br /> South Purwokerto
                    </p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <p>Price</p>
                  </div>
                  <div className="col-sm-6">
                    <h6>$10.00/seat</h6>
                  </div>
                </div>

                <div className="row">
                  <button className="btn btn-primary" type="button">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-4 kartu1">
                    <img src={vektor} alt="" />
                  </div>
                  <div className="col-sm-8">
                    <h6>ebv.id</h6>
                    <p>
                      Whatever street No.12, <br /> South Purwokerto
                    </p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <p>Price</p>
                  </div>
                  <div className="col-sm-6">
                    <h6>$10.00/seat</h6>
                  </div>
                </div>

                <div className="row">
                  <button className="btn btn-primary" type="button">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row kartu2">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-4 kartu1">
                    <img src={vektor} alt="" />
                  </div>
                  <div className="col-sm-8">
                    <h6>ebv.id</h6>
                    <p>
                      Whatever street No.12, <br /> South Purwokerto
                    </p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <p>Price</p>
                  </div>
                  <div className="col-sm-6">
                    <h6>$10.00/seat</h6>
                  </div>
                </div>

                <div className="row">
                  <button className="btn btn-primary" type="button">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-4 kartu1">
                    <img src={vektor} alt="" />
                  </div>
                  <div className="col-sm-8">
                    <h6>ebv.id</h6>
                    <p>
                      Whatever street No.12, <br /> South Purwokerto
                    </p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <p>Price</p>
                  </div>
                  <div className="col-sm-6">
                    <h6>$10.00/seat</h6>
                  </div>
                </div>

                <div className="row">
                  <button className="btn btn-primary" type="button">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-4 kartu1">
                    <img src={vektor} alt="" />
                  </div>
                  <div className="col-sm-8">
                    <h6>ebv.id</h6>
                    <p>
                      Whatever street No.12, <br /> South Purwokerto
                    </p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                  <div className="col-sm-3">
                    <p>08:30</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <p>Price</p>
                  </div>
                  <div className="col-sm-6">
                    <h6>$10.00/seat</h6>
                  </div>
                </div>

                <div className="row">
                  <button className="btn btn-primary" type="button">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row tombols">
          <div className="col-sm-12 tombol">
            <button type="button" className="btn btn-outline-primary">
              1
            </button>
            <button type="button" className="btn btn-outline-primary">
              2
            </button>
            <button type="button" className="btn btn-outline-primary">
              3
            </button>
            <button type="button" className="btn btn-outline-primary">
              4
            </button>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ManageMovie;
