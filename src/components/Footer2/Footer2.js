import aboutMe from "../../assets/img/About-me.jpg";
import { Col, Layout, Row } from "antd";
import "./Footer2.scss";
import { Link } from "react-router-dom";

export const Footer2 = () => {
  return (
    <Row className="footer2">
      <Col span={10}>
        <p className="selfIntro">
          Hello! My name is Erix Chen and I am an interior designer and UX/UI
          designer. I have a passion for creating functional and aesthetically
          pleasing spaces that enhance the user experience. With my background
          in interior design, UX/UI design, and a keen eye for detail, I am
          dedicated to delivering designs that meet the needs and expectations
          of my clients. Whether it's a residential space or a commercial
          project, I approach each design challenge with creativity, efficiency,
          and a commitment to excellence.
        </p>
      </Col>
      <Col span={14}>
        <Link className="contactMe" to="/contact">
          CONTACT ME
        </Link>
      </Col>
    </Row>
  );
};
