import React, { Component } from "react";
import moment from "moment";
import { Link, NavLink } from "react-router-dom";
import "../styles/homepage.css";
import { Jumbotron, Container } from "reactstrap";
import { Form, Select, Button, DatePicker } from "antd";
import CustomerSummaryTable from "./customerSummaryTable";
import * as jsPDF from "jspdf";
const { Option } = Select;
export class Summary extends Component {
  displayName = Summary.name;

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      date: "",
      showTable: false,
      selectedValue: "",
      customerData: props.location.state.customerData,
    };

    this.handlechange = this.handlechange.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  formatDate(timestamp) {
    var x = new Date(timestamp);
    var dd = x.getDate();
    var mm = x.getMonth() + 1;
    var yy = x.getFullYear();
    return dd + "-" + mm + "-" + yy;
  }

  handlechange = (date, datestring) => {
    this.setState({ date: datestring });
  };

  handleShowTable = (value) => {
    this.setState({ showTable: value });
  };

  onChange(value) {
    this.setState({ selectedValue: value });
    // this.setState({ date: date.format('DD/MM/YYYY') }, () => console.log(this.state.date));
  }
  render() {
    return this.state.showTable ? (
      // <DeliveryTable handleShowTable={this.handleShowTable} username={this.state.username} selectedObject={this.state.selectedObject} />
      <div>
        <CustomerSummaryTable
          customer={
            this.state.customerData.filter(
              (cust) => cust.customerId == this.state.selectedValue
            )[0]
          }
        />
        <Button
          block
          size="large"
          onClick={() => this.handleShowTable(false)}
          value="Submit"
          type="primary"
          style={{
            borderColor: "#fadb14",
            backgroundColor: "#fadb14",
            color: "white",
          }}
        >
          Back
        </Button>
      </div>
    ) : (
      <div className="row" id="Body">
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Customer Summary</h1>
              {/* <h3 className="display-3">CustomerUsername</h3> */}
              <div>
                <div>
                  <Select
                    style={{ width: "100%" }}
                    placeholder="Select customer name"
                    onChange={this.onChange}
                  >
                    {this.state.customerData.map((mag, i) => (
                      <Option value={mag.customerId} key={i}>
                        {mag.name}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              <br></br>
              <Button
                block
                disabled={this.state.selectedValue ? false : true}
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
              {/* <Button type="primary" >
              <a style={{ width: "40%" }} href="/fetchcustomer">
                {" "}
                Return to Customer Management{" "}
              </a>
              </Button> */}
              <Link to="/fetchcustomer">
                <Button type="primary" >Return to Customer Management{" "}</Button>
              </Link>
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
