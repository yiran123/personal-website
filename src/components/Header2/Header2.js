import { useEffect, useState } from "react";
import { Menu } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./Header2.scss";
import logo from "../../assets/img/ERIX-Logo.png";

const items = [
  {
    label: "HOME",
    key: "/",
  },
  {
    label: "ARCHITECTURE",
    key: "ARCHITECTURE",
    // icon: <MailOutlined />,
  },
  {
    label: "INTERIOR DESIGN",
    key: "/interiorDesign",
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
];

export const Header2 = () => {
  const [current, setCurrent] = useState("/");
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(e.key);
  };
  return (
    <>
      <div className="small-logo-section">
        <img src={logo} alt="Erix logo" />
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
