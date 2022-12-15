import { useEffect, useState } from "react";
import { Menu } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./Header2.scss";
import logo from "../../assets/img/ERIX-Logo.png";
import { Link } from "react-router-dom";

const items = [
  // {
  //   label: "HOME",
  //   key: "/",
  // },
  {
    label: "INTERIOR DESIGN",
    key: "/interiorDesign",
    // icon: <MailOutlined />,
  },
  {
    label: "ARCHITECTURE",
    key: "/architecture",
    // key: "ARCHITECTURE",
    // icon: <MailOutlined />,
  },
  {
    label: "UX/UI DESIGN",
    key: "/uxuiDesign",
    // icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: "GRAPHIC DESIGN",
    key: "/graphicDesign",
  },
  {
    label: "CONTACT",
    key: "/contact",
  },
];

export const Header2 = () => {
  const [current, setCurrent] = useState("/interiorDesign");
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
      <Menu
        className="header2"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </>
  );
};
