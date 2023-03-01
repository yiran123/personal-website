import { Header2 } from "../Header2/Header2";

import nextCosmetics from "../../assets/img/Next-Cosmetics.jpg";
import metaPlaza from "../../assets/img/Meta-plaza.jpg";
import seniorHouse from "../../assets/img/Senior-house.jpg";
import fertilityClinic from "../../assets/img/Fertility-clinic.jpg";
import cp from "../../assets/img/Curved-path.jpg";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

export const Architecture = () => {
  return (
    <>
      <Header2 url="/architecture" />
      <Row>
        <center>
          <Col span={17} className="container">
            Hello, architecture
          </Col>
        </center>
      </Row>
    </>
  );
};
