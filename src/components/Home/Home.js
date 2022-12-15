import logo from "../../assets/img/ERIX-Logo.png";
import aboutMe from "../../assets/img/About-me.jpg";
import "./Home.scss";
import { Header } from "../Header";

import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Layout } from "antd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Home = () => {
  const { Footer, Sider, Content } = Layout;

  return (
    <>
      <Header />
      <Layout>
        <div className="logo-section">
          <img src={logo} alt="Erix logo" />
          <span className="title_name">ERIX CHEN</span>
          <span className="subtitle">to dream · to think · to create</span>
        </div>
        <Content>
          <div className="pic-section">
            <div className="img-section low">
              <div className="architecture content-pic"></div>
              <p className="content">ARCHITECTURE</p>
            </div>
            <div className="img-section">
              <div className="interiorDesign content-pic"></div>
              <p className="content">INTERIOR DESIGN</p>
            </div>
            <div className="img-section low">
              <div className="UXUIDesign content-pic"></div>
              <p className="content">UX/UI DESIGN</p>
            </div>
            <div className="img-section">
              <div className="graphicDesign content-pic"></div>
              <p className="content">GRAPHIC DESIGN</p>
            </div>
          </div>
        </Content>
        <Footer>
          <div className="parent">
            <div className="children1_aboutMe"></div>
            <div className="children2_background">
              <img src={aboutMe} alt="About me" />
            </div>
          </div>
        </Footer>
      </Layout>
    </>
  );
};
