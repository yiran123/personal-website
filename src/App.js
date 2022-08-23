import logo from "./assets/img/ERIX-Logo.png";
import ARCDesignB from "./assets/img/ARC-Design-b.jpg";
import GraphicDesignB from "./assets/img/Graphic-Design-b.jpg";
import InteriorDesignB from "./assets/img/Interior-Design-b.jpg";
import UXUIDesignB from "./assets/img/UXUI-Design-b.jpg";
import "./App.scss";
import { useEffect, useState } from "react";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Layout } from "antd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header"></header>
//     </div>
//   );
// }
const items = [
  {
    label: "HOME",
    key: "HOME",
  },
  {
    label: "ARCHITECTURE",
    key: "ARCHITECTURE",
    // icon: <MailOutlined />,
  },
  {
    label: "UX/UI DESIGN",
    key: "UX/UI DESIGN",
    // icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: "GRAPHIC DESIGN",
    key: "GRAPHIC DESIGN",
  },
  {
    label: "PRODUCT DESIGN",
    key: "PRODUCT DESIGN",
  },
  {
    label: "CONTACT",
    key: "CONTACT",
  },

  // {
  //   label: (
  //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //       Navigation Four - Link
  //     </a>
  //   ),
  //   key: "alipay",
  // },
];

const App = () => {
  const [current, setCurrent] = useState("HOME");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const { Header, Footer, Sider, Content } = Layout;

  return (
    // <Container fluid>
    //   <Row>
    //     <Col>
    //       <Menu
    //         onClick={onClick}
    //         selectedKeys={[current]}
    //         mode="horizontal"
    //         items={items}
    //       />
    //     </Col>
    //     <Row>
    //       <Col className="logo-section">
    //         <img src={logo} alt="Erix logo" />
    //       </Col>
    //     </Row>
    //   </Row>
    // </Container>
    <>
      <Layout>
        <div className="logo-section">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
          <img src={logo} alt="Erix logo" />
          <h1>ERIX CHEN</h1>
          <h3>to dream · to think · to create</h3>
        </div>
        <Content>
          <div className="pic-section">
            <div className="img-section low">
              <img src={ARCDesignB} alt="ARC Design BW" />
              <p>ARCHITECTURE</p>
            </div>
            <div className="img-section">
              <img src={InteriorDesignB} alt="Interior Design BW" />
              <p>INTERIOR DESIGN</p>
            </div>
            <div className="img-section low">
              <img src={UXUIDesignB} alt="UXUI Design BW" />
              <p>UX/UI DESIGN</p>
            </div>
            <div className="img-section">
              <img src={GraphicDesignB} alt="Graphic Design BW" />
              <p>GRAPHIC DESIGN</p>
            </div>
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default App;
