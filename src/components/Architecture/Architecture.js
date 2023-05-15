import { Header2 } from "../Header2/Header2";
import museumOfEmotions from "../../assets/projects/architecture/museumOfEmotions.png";
import newsStand from "../../assets/projects/architecture/newsStand.png";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import { Footer2 } from "../Footer2/Footer2";

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
            <Link className="link" to="news-stand">
              <div className="project">
                <img src={newsStand} alt="newsStand"></img>
                <p className="title">News Stand</p>
                <p className="date">Fall 2021</p>
              </div>
            </Link>
          </Col>
        </center>
      </Row>
      <Footer2 />
    </>
  );
};
