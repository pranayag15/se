import React, { Component } from "react";
import { NavMenu } from "./NavMenu";
import { Link, NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import { Jumbotron, Container } from "reactstrap";
import { Table } from "reactstrap";
import EmployeeTable from "./employeeCard";
import AddEmployee from "./modal";
import AddEmployeeForm from "./forms/addEmployee";
export class FetchEmployee extends Component {
  displayName = FetchEmployee.name;

  constructor(props) {
    super(props);
    this.state = {
      info: [],
      loading: true,
      employeeData: [
        {
          key: "1",
          name: "Anmol",
          employeeId: 32,
          pincode: "256341",
          username: "anmolabc",
        },
        {
          key: "2",
          name: "Sachin",
          employeeId: 42,
          pincode: "369852",
          username: "sachinboy",
        },
        {
          key: "3",
          name: "Amit",
          employeeId: 52,
          pincode: "254158",
          username: "amitchopra",
        },
      ],
    };
  }

  handleDelete = (index) => {
    let data = this.state.employeeData.filter(
      (item) => item.employeeId !== index
    );
    this.setState({ employeeData: data });
  };

  addNewEmployee = (data) => {
    data.employeeId = Date.now() % 100;
    data.key = this.state.employeeData[this.state.employeeData.length - 1] + 1;
    this.setState({ employeeData: [...this.state.employeeData, data] });
  };

  handleEdit = (id, e) => {
    this.props.history.push("/employee/edit/" + id);
  };

  renderForecastsTable(info) {
    return <h1>Loading...</h1>;
  }

  render() {
    let contents = this.state.loading ? (
      <EmployeeTable
        handleDelete={this.handleDelete}
        dataSource={this.state.employeeData}
      />
    ) : (
      this.renderForecastsTable(this.state.info)
    );

    return (
      <div>
        <NavMenu></NavMenu>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Delivery Personnel</h1>

            <AddEmployee
              handleSubmit={(data) => this.addNewEmployee(data)}
              form={AddEmployeeForm}
              modalText="Add Employee"
            />
            <br />
            <br />
            <br />
            {contents}
            <br />
            <br />
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export class EmployeeData {
  employeeId = 0;
  name = "";
  pincode = "";
  salary = "";
  address = "";
  username = "";
}
