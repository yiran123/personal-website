import { Header2 } from "../Header2/Header2";
import IndepChairCabinet from "../../assets/projects/model/Indep_Chair_Cabinet.png";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

export const Model = () => {
  return (
    <>
      <Header2 url="/modelling" />
      <Row>
        <center>
          <Col span={17} className="container">
            <Link className="link" to="indep-chair-cabinet">
              <div className="project project1">
                <img src={IndepChairCabinet} alt="indep-chair-cabinet"></img>
                <p className="title">Indep Chair&Cabinet</p>
                <p className="date">Fall 2022</p>
              </div>
            </Link>
          </Col>
        </center>
      </Row>
    </>
  );
};
