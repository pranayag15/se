import React, { Component } from "react";
import { NavMenu } from "./NavMenu";
import { Link, NavLink } from "react-router-dom";
import * as jsPDF from "jspdf";
import { Button } from "reactstrap";
import { Jumbotron, Container } from "reactstrap";
import { Table } from "reactstrap";
import CustomerModal from "./modal";
import AddCustomerForm from "./forms/addCustomer";
import CustomerTable from "./customerTable";
import moment from "moment"
export class FetchCustomer extends Component {
  displayName = FetchCustomer.name;

  constructor(props) {
    super(props);
    this.state = { 
      info: [], 
      loading: true,
      customerData: [
        {
          key: 1,
          customerId: 11,
          name: "Mohit Singh",
          address: "MMIG-181, Preeti Vihar",
          pincode: 652341,
          magazine: ["Champak", "Sarita", "Bal hans"],
          issueDate: "15/05/2019",
          endDate: "01/02/2021",
          billDate: "01/12/2020",
          paymentMode: "Cash",
          paymentStatus: "Paid",
          subscriptionStatus: "going",
          email: "mohit@gmail.com"
        }
      ] 
    };

    fetch("api/Customer/Index")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ info: data, loading: false });
      });
  }
  handleDelete(id, e) {
    {
      {
        console.log("Parameter", id);
        if (!window.confirm("Do you want to delete customer with Id: " + id))
          return;
        else {
          fetch("api/Customer/Delete/" + id, {
            method: "delete",
          }).then((data) => {
            this.setState({
              info: this.state.info.filter((rec) => {
                return rec.customerId !== id;
              }),
            });
          });
        }
      }
    }
  }

  handleEdit(id, e) {
    {
      console.log("Parameter");
      this.props.history.push("/customer/edit/" + id);
    }
  }
  handleReminder(id, e) {
    fetch("/api/Customer/Reminder/" + id, {
      method: "GET",
      headers: { "Content-Type": "text" },
    })
      .then((response) => response.text())
      .then((data) => {
        if (data == "yes") {
          alert("Mail Sent");
        } else alert("Payment not due yet");
      });
  }
  handleBill(id, e) {
    {
      console.log("Parameter");
      fetch("/api/Customer/Bill/" + id, {
        method: "GET",
        headers: { "Content-Type": "text" },
      })
        .then((response) => response.text())
        .then((data) => {
          var doc = new jsPDF();

          doc.text(data, 10, 10);
          doc.save(id + "_Bill.pdf");
        });
    }
  }
  formatDate(timestamp) {
    var x = new Date(timestamp);
    var dd = x.getDate();
    var mm = x.getMonth() + 1;
    var yy = x.getFullYear();
    return dd + "/" + mm + "/" + yy;
  }

  renderForecastsTable(info) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>CustomerId</th>
            <th>Name</th>
            <th>Address</th>
            <th>PinCode</th>
            <th>Email</th>
            <th>Magazine</th>
            <th>Issue date</th>
            <th>End date</th>
            <th>Bill date</th>
            <th>Payment Mode</th>
            <th>Payment Status</th>
            <th>Subscription Status</th>
          </tr>
        </thead>
        <tbody>
          {info.map((cus) => (
            <tr key={cus.customerId}>
              <td></td>
              <td>{cus.customerId}</td>
              <td>{cus.name}</td>
              <td>{cus.address}</td>
              <td>{cus.pinCode}</td>
              <td>{cus.email}</td>
              <td>{cus.magazineName}</td>
              <td>{this.formatDate(cus.issueDate)}</td>
              <td>{this.formatDate(cus.endDate)}</td>
              <td>{this.formatDate(cus.billDate)}</td>
              <td>{cus.paymentMode}</td>
              <td>{cus.paymentStatus}</td>
              <td>{cus.subscriptionStatus}</td>
              <td>
                <Button
                  color="warning"
                  onClick={(e) => this.handleEdit(cus.customerId, e)}
                >
                  {" "}
                  Edit{" "}
                </Button>{" "}
                <Button
                  color="danger"
                  onClick={(e) => this.handleDelete(cus.customerId, e)}
                >
                  Delete{" "}
                </Button>{" "}
                <Button
                  color="success"
                  onClick={(e) => this.handleBill(cus.customerId, e)}
                >
                  {" "}
                  Gn Monthly Bill
                </Button>{" "}
                <Button
                  color="info"
                  onClick={(e) => this.handleReminder(cus.customerId, e)}
                >
                  Send Reminder
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  handleDelete = (index) => {
    let data = this.state.customerData.filter(
      (item) => item.customerId !== index
    );
    this.setState({ customerData: data });
  };

  addNewCustomer = (data) => {
    if(data.issueDate) data.issueDate = data.issueDate.format('DD/MM/YYYY')
    if(data.endDate) data.endDate = data.endDate.format('DD/MM/YYYY')
    if(data.billDate) data.billDate = data.billDate.format('DD/MM/YYYY')
    data.customerId = Date.now() % 100;
    data.key = this.state.customerData[this.state.customerData.length - 1] + 1;
    this.setState({ customerData: [...this.state.customerData, data] });
    console.log(data);
    // data.employeeId = Date.now() % 100
    // data.key = this.state.employeeData[this.state.employeeData.length-1] + 1
    // this.setState({employeeData: [...this.state.employeeData, data]})
  };

  render() {
    let contents = this.state.loading ? (
      <CustomerTable 
        dataSource={this.state.customerData}
        handleDelete={this.handleDelete}
      />
    ) : (
      this.renderForecastsTable(this.state.info)
    );

    return (
      <div>
        <NavMenu></NavMenu>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Customers</h1>

            {/* <p>
              <Link to="/addcustomer">Create New</Link>
            </p> */}
            <CustomerModal
              handleSubmit={(data) => this.addNewCustomer(data)}
              form={AddCustomerForm}
              modalText="Create New"
            />
            <p>
              <Link to={{pathname: "/getsummary", state: { customerData: this.state.customerData }}}>Get Summary</Link>
            </p>
            {contents}
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export class CustomerData {
  customerId = 0;
  name = "";
  address = "";
  pincode = 0;
  magazineName = "";
  issueDate = "";
  endDate = "";
  billDate = "";
  paymentMode = "";
  paymentStatus = "";
  subscriptionStatus = "";
  email = "";
}
