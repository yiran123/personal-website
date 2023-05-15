import aboutMe from "../../assets/img/About-me.jpg";
import { Col, Layout, Row } from "antd";
import "./Contact.scss";
import { Link } from "react-router-dom";
import { Header2 } from "../Header2/Header2";
import resume from "../../assets/resume.pdf";
import ins from "../../assets/img/ins.png";
import linkedIn from "../../assets/img/linkedIn.png";

export const Contact = () => {
  return (
    <>
      <Header2 url="/contact" />
      <Row className="desktop">
        <Col span={2}></Col>
        <Col span={20} className="background ">
          <div className="contactMe">
            <h2 className="contact-title">CONTACT ME</h2>
            <p className="email">Erixdesn@gmail.com</p>
            <p className="social-title">On Social</p>
            <div className="icons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/erix.cz/"
              >
                <img src={ins} alt="ins"></img>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/erixchen/"
              >
                <img src={linkedIn} alt="linkedIn"></img>{" "}
              </a>
            </div>

            <a className="resume" href={resume} target="_black">
              RESUME
            </a>
          </div>
        </Col>
        <Col span={2}></Col>
      </Row>
      <Row className="mobile">
        <div className="contactMe_mobile">
          <p className="email">Erixdesn@gmail.com</p>
          <p className="social-title">On Social</p>
          <div className="icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/erix.cz/"
            >
              <img src={ins} alt="ins"></img>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/erixchen/"
            >
              <img src={linkedIn} alt="linkedIn"></img>{" "}
            </a>
          </div>

          <a className="resume" href={resume} target="_black">
            RESUME
          </a>
        </div>
      </Row>
    </>
  );
};
