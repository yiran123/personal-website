import { useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

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
    label: "UX/UI/GRAPHIC DESIGN",
    key: "/uxuiDesign",
    // icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: "MODELLING",
    key: "/graphicDesign",
  },
  {
    label: "CONTACT",
    key: "/contact",
  },
];

export const Header = () => {
  const [current, setCurrent] = useState("/");
  const navigate = useNavigate();
  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
