import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../Header";
import Footer from "../../Footer";

// import "./index.css";

const TiketResult = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <div className="tiketresult">
            <h5>Dashboard</h5>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default TiketResult;
