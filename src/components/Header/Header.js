import { useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const items = [
  {
    label: "INTERIOR DESIGN",
    key: "/interior-design",
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
    key: "/uxuiGraphic-design",
    // icon: <AppstoreOutlined />,
    // disabled: true,
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
