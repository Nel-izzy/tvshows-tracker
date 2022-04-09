import React from "react";
import { Menu } from "antd";
import SearchBar from "./SearchBar";
function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="favorite">
        <a href="/favorite">Favorite</a>
      </Menu.Item>
      <Menu.Item key="viewed">
        <a href="/viewed">Viewed</a>
      </Menu.Item>
      <Menu.Item disabled>
        <SearchBar />
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
