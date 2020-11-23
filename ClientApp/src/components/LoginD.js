import React, { Component } from "react";
import { Select, Button } from "antd";
import { blue } from "@ant-design/colors";
import DeliveryTable from "./deliveryTable";
import "../styles/homepage.css";
import { Link, NavLink } from "react-router-dom";
import { Jumbotron, Container } from "reactstrap";
// import { Button } from "react-bootstrap";
const { Option } = Select;
export class LoginD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "anmolabc",
      info: [],
      salary: "",
      date: "",
      selectedObject: {
        key: "1",
        name: "Anmol",
        employeeId: 101,
        pincode: "256341",
        username: "anmolabc",
      },
      redirectToLogin: false,
      showTable: false,
      employeeData: [
        {
          key: "1",
          name: "Anmol",
          employeeId: 101,
          pincode: "256341",
          username: "anmolabc",
        },
        {
          key: "2",
          name: "Sachin",
          employeeId: 102,
          pincode: "369852",
          username: "sachinboy",
        },
        {
          key: "3",
          name: "Amit",
          employeeId: 103,
          pincode: "254158",
          username: "amitchopra",
        },
      ],
    };
  }
  onUpdate = (val) => {
    this.setState({
      username: val,
    });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleShowTable = (value) => {
    this.setState({ showTable: value }, () => console.log(this.state.showTable));
  };

  handlename = (value) => {
    let obj = this.state.employeeData.filter(item => item.username == value)[0]
    this.setState({ username: value, selectedObject: obj });
    console.log(obj)
  };
  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem("userData")) {
      return (
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h3 className="display-3">
                {" "}
                Deliveries for Date {this.state.date}{" "}
              </h3>

              <h3 className="display-3">
                {" "}
                Delivery Person Name: {this.state.username}{" "}
              </h3>

              <table className="table">
                <thead>
                  <tr>
                    <th>No of Deliveries </th>

                    <th>Customer Name</th>
                    <th>Customer Address</th>
                    <th>Magazine Name </th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.info.map(function (item, key) {
                    return (
                      <tr key={key}>
                        <td>{key + 1}</td>

                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.magazineName}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <h3 className="display-3">
                {" "}
                Daily Salary earned: Rs {this.state.salary}
              </h3>
              <div>
                <a href="/fetchemployee">Back to Home Page </a>
              </div>
            </Container>
          </Jumbotron>
        </div>
      );
    }

    return this.state.showTable ? (
      <DeliveryTable handleShowTable={this.handleShowTable} username={this.state.username} selectedObject={this.state.selectedObject} />
    ) : (
      <div className="row" id="Body">
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">View Deliveries</h1>
              <h3 className="display-3">Delivery Person Username</h3>
              <div>
                <div>
                  <Select
                    defaultValue={this.state.username}
                    style={{ width: "100%" }}
                    onChange={this.handlename}
                  >
                    {this.state.employeeData.map((mag) => (
                      <Option key={mag.employeeId} value={mag.username}>
                        {mag.name}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              <br></br>
              <Button
                block
                size="large"
                onClick={() => this.handleShowTable(true)}
                value="Submit"
                type="primary"
                style={{
                  borderColor: "#fadb14",
                  backgroundColor: "#fadb14",
                  color: "white",
                }}
              >
                Submit
              </Button>{" "}
              <br></br>
              <br></br>
              <br></br>
              {/* <a href="/fetchemployee"> Back to Homepage </a> */}
              <Link to="/fetchemployee">
                <Button type="primary" >Back to Homepage</Button>
              </Link>
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
export default LoginD;
