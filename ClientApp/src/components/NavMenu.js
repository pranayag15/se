import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Row, Col, Container } from "reactstrap";
import {FetchCustomer} from "./FetchCustomer"
import {FetchEmployee} from "./FetchEmployee"
import {LoginD} from "./LoginD"
const { SubMenu } = Menu;
export class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      current: "1"
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  handleClick = e => {
    this.setState({ current: e.key });
  };
  render() {
    return (
      <div>
        {/* <Container> */}
        {/* <Col sm="12" md={{ size: 12, offset: 12 }}>
            <ul>
              <li>
                <a href="/fetchemployee">Delivery Person</a>
              </li>
              <li>
                <a href="/fetchcustomer">Customer</a>
              </li>
              <li>
                <a href="/logindelivery">Deliveries Today</a>
              </li>
              <li>
                <a href="/home">Logout</a>
              </li>
            </ul>
          </Col> */}
        <Menu onClick={this.handleClick} selectedKeys={this.state.current} mode="horizontal">
          <Menu.Item key="1" icon={<MailOutlined />}>
            <a style={{ background: "none !important" }} href="/fetchemployee">
              Delivery Person
            </a>
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            <a href="/fetchcustomer">Customer</a>
          </Menu.Item>
          <Menu.Item key="3" icon={<AppstoreOutlined />}>
            <a href="/logindelivery">Deliveries Today</a>
          </Menu.Item>
          <Menu.Item key="4">
            <a href="/home">Logout</a>
          </Menu.Item>
        </Menu>
        {/* </Container> */}
      </div>
    );
  }
}
