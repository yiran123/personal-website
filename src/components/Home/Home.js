import logo from "../../assets/img/ERIX-Logo.png";
import aboutMe from "../../assets/img/About-me.jpg";
import "./Home.scss";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
import { Col, Layout, Row } from "antd";

export const Home = () => {
  const { Footer, Sider, Content } = Layout;

  return (
    <>
      <Header />
      <Layout>
        <Row>
          <Col span={24} className="logo-section">
            <img src={logo} alt="Erix logo" />
            <span className="title_name">ERIX CHEN</span>
            <span className="subtitle">to dream · to think · to create</span>
          </Col>
        </Row>
        <Content>
          <Row className="pic-section">
            <Col
              xs={24}
              sm={24}
              md={6}
              lg={6}
              xl={6}
              className="img-section low"
            >
              <div className="architecture content-pic"></div>
              <p className="content">ARCHITECTURE</p>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="img-section">
              <Link style={{ textDecoration: "none" }} to="interiorDesign">
                <div className="interiorDesign content-pic"></div>
                <p className="content">INTERIOR DESIGN</p>
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
              <div className="UXUIDesign content-pic"></div>
              <p className="content">UX/UI DESIGN</p>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="img-section">
              <div className="modelDesign content-pic"></div>
              <p className="content">MODEL DESIGN</p>
            </Col>
          </Row>
        </Content>
        <Footer>
          <Row className="parent">
            <Col span={24}>
              <div className="children1_aboutMe">
                <p className="title">ABOUT ME</p>
                <p className="content">
                  Hi, my name is Erix Chen, I'm an interior designer and UX/UI
                  designer, who focuses on people-oriented design. I have
                  background about interior design, graphic design, UX/UI
                  design, architecture design and photography. I have always
                  been committed to explore the combination of aesthetics, user
                  experience and space planning. Base on user experience
                  researches to design people-oriented products and projects
                  that provide better experiences for all the users.
                </p>
              </div>
              <div className="children2_background">
                <img src={aboutMe} alt="About me" />
              </div>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </>
  );
};
