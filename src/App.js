import logo from "./assets/img/ERIX-Logo.png";
import "./App.scss";
import { useEffect, useState } from "react";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Header, Content, Layout } from "antd";
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

  return (
    <Container fluid>
      <Row>
        <Col>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </Col>
        <Row>
          <Col className="logo-section">
            <img src={logo} alt="Erix logo" />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default App;
