import { Header2 } from "../Header2/Header2";
import museumOfEmotions from "../../assets/projects/architecture/museumOfEmotions.png";
import SFACC from "../../assets/projects/uxui/SFACC.png";
import menuWizard from "../../assets/projects/uxui/menuWizard.png";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

export const Architecture = () => {
  return (
    <>
      <Header2 url="/architecture" />
      <Row>
        <center>
          <Col span={17} className="container">
            <Link className="link" to="museum-of-emotions">
              <div className="project project1">
                <img src={museumOfEmotions} alt="museum-of-emotions"></img>
                <p className="title">Museum of Emotions</p>
                <p className="date">Spring 2022</p>
              </div>
            </Link>
            <Link className="link" to="SFACC">
              <div className="project">
                <img src={SFACC} alt="SFACC"></img>
                <p className="title">SFACC</p>
                <p className="date">Spring 2022</p>
              </div>
            </Link>
            <Link className="link" to="menu-wizard">
              <div className="project">
                <img src={menuWizard} alt="menu-wizard"></img>
                <p className="title">Menu Wizard</p>
                <p className="date">Fall 2021</p>
              </div>
            </Link>
          </Col>
        </center>
      </Row>
    </>
  );
};
