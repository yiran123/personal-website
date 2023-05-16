import logo from "../../assets/img/ERIX-Logo.png";
import selfie from "../../assets/img/selfie.png";
import aboutMe from "../../assets/img/About-me.jpg";
import "./Home.scss";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
import { Col, Layout, Row } from "antd";

export const Home = () => {
  const { Footer, Sider, Content } = Layout;

  return (
    <div>
      <Header />
      <Layout>
        <Row>
          <Col span={24} className="logo-section">
            <img src={logo} alt="Erix logo" />
            <span className="name">ERIX CHEN</span>
            <div className="subtitle">
              <span>
                to dream<span className="dot">&nbsp;·&nbsp;</span>
              </span>
              <span>
                to think<span className="dot">&nbsp;·&nbsp;</span>
              </span>
              <span>to create</span>
            </div>
          </Col>
        </Row>
        <Content>
          <Row className="selfIntro-section">
            <Col span={24}>
              <div className="selfTitle">
                Interior Designer & UX/UI Designer
              </div>
              <div className="selfName">Erix Chen</div>
              <Row>
                <Col span={6}>
                  <img
                    src={selfie}
                    className="selfie"
                    alt="Erix Chen selfie"
                  ></img>
                </Col>
                <Col span={18}>
                  <p className="selfIntroduction">
                    I have a passion for creating functional and aesthetically
                    pleasing spaces that enhance the user experience. With my
                    background in interior design, UX/UI design, and a keen eye
                    for detail, I am dedicated to delivering designs that meet
                    the needs and expectations of my clients.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="pic-section">
            <Col
              xs={24}
              sm={24}
              md={6}
              lg={6}
              xl={6}
              className="img-section low"
            >
              <Link style={{ textDecoration: "none" }} to="interior-design">
                <div className="interiorDesign content-pic"></div>
                <p className="content">INTERIOR DESIGN</p>
              </Link>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="img-section">
              <Link style={{ textDecoration: "none" }} to="architecture">
                <div className="architecture content-pic"></div>
                <p className="content">ARCHITECTURE</p>
              </Link>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={6}
              lg={6}
              xl={6}
              className="img-section low"
            >
              <Link style={{ textDecoration: "none" }} to="uxuiGraphic-design">
                <div className="UXUIDesign content-pic"></div>
                <p className="content">UX/UI DESIGN</p>
              </Link>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="img-section">
              <Link style={{ textDecoration: "none" }} to="modelling">
                <div className="modelDesign content-pic"></div>
                <p className="content">MODEL DESIGN</p>
              </Link>
            </Col>
          </Row>
        </Content>
        <Footer>
          <Row className="parent">
            <Col span={24}>
              <div className="children1_aboutMe">
                <p className="title">ABOUT ME</p>
                <p className="content">
                  Hello! My name is Erix Chen and I am an interior designer and
                  UX/UI designer. I have a passion for creating functional and
                  aesthetically pleasing spaces that enhance the user
                  experience. With my background in interior design, UX/UI
                  design, and a keen eye for detail, I am dedicated to
                  delivering designs that meet the needs and expectations of my
                  clients. Whether it's a residential space or a commercial
                  project, I approach each design challenge with creativity,
                  efficiency, and a commitment to excellence.
                </p>
              </div>
              <div className="children2_background">
                <img src={aboutMe} alt="About me" />
              </div>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </div>
  );
};
