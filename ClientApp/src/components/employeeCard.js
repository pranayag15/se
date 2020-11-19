import React, { Component } from "react";
import { Card, Col, Row, Table } from "antd";
import ButtonIcon from "./tableButton";
import { DeleteOutlined } from "@ant-design/icons";
class EmployeeCard extends Component {
  constructor(props) {
    super(props);
    this.state = { employeesTableData: [] };
    this.columns = [
      {
        title: "EmployeeID",
        dataIndex: "employeeId",
        key: "employeeId",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Username",
        dataIndex: "username",
        key: "username",
      },
      {
        title: "Pincode",
        dataIndex: "pincode",
        key: "pincode",
      },
      {
        title: "",
        dataIndex: "",
        render: (object) => {
          return (
            <ButtonIcon
              onSubmit={() => props.handleDelete(object.employeeId)}
              modalTitle="Sure you want to delete ?"
              icon={<DeleteOutlined />}
              shape="round"
              size="small"
              style={{ backgroundColor: "#F84D65", color: "white" }}
            />
          );
        },
      },
    ];
  }
  render() {
    return <Table dataSource={this.props.dataSource} columns={this.columns} />;
  }
}

export default EmployeeCard;