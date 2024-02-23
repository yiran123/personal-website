import { useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./Header2.scss";
import logo from "../../assets/img/ERIX-Logo.png";
import { Link } from "react-router-dom";

const items = [
  {
    label: "INTERIOR DESIGN",
    key: "/interior-design",
  },
  {
    label: "ARCHITECTURE",
    key: "/architecture",
  },
  {
    label: "UX/UI/GRAPHIC DESIGN",
    key: "/uxuiGraphic-design",
  },
  {
    label: "MODELLING",
    key: "/modelling",
  },
  {
    label: "CONTACT",
    key: "/contact",
  },
];

export const Header2 = (props) => {
  const { url } = props;
  const [current, setCurrent] = useState(url);
  const navigate = useNavigate();
  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };
  return (
    <>
      <div className="small-logo-section">
        <Link style={{ textDecoration: "none" }} to="/">
          <img src={logo} alt="Erix logo" />
        </Link>
      </div>
      <div className="desktop">
        <Menu
          className="header2"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
      <div className="mobile">
        <Menu
          className="header2"
          onClick={onClick}
          selectedKeys={[current]}
          style={{ display: "flex", flexDirection: "column" }}
          theme="light"
          mode="inline"
          items={items}
        />
      </div>
    </>
  );
};
