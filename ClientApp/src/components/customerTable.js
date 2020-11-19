import React, { Component } from "react";
import { Tag, Col, Row, Table } from "antd";
import ButtonIcon from "./tableButton";
import { DeleteOutlined } from "@ant-design/icons";
class EmployeeCard extends Component {
  constructor(props) {
    super(props);
    this.state = { employeesTableData: [] };
    this.columns = [
      {
        title: "ID",
        dataIndex: "customerId",
        key: "customerId",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Pincode",
        dataIndex: "pincode",
        key: "pincode",
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Magazine",
        dataIndex: "magazine",
        key: "magazine",
        render: (magazines) => (
          <div>
            {magazines.map((magazine) => {
              return <Tag color="cyan">{magazine}</Tag>;
            })}
          </div>
        ),
      },
      {
        title: "Issue Date",
        dataIndex: "issueDate",
        key: "issueDate",
      },
      {
        title: "End Date",
        dataIndex: "endDate",
        key: "endDate",
      },
      {
        title: "Bill Date",
        dataIndex: "billDate",
        key: "billDate",
      },
      {
        title: "Payment Mode",
        dataIndex: "paymentMode",
        key: "paymentMode",
      },
      {
        title: "Payment status",
        dataIndex: "paymentStatus",
        key: "paymentStatus",
      },
      {
        title: "Subscription Status",
        dataIndex: "subscriptionStatus",
        key: "subscriptionStatus",
      },
      {
        title: "",
        dataIndex: "",
        render: (object) => {
          return (
            <ButtonIcon
              onSubmit={() => props.handleDelete(object.customerId)}
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
    return (
      <Table
        dataSource={this.props.dataSource}
        columns={this.columns}
        scroll={{ x: 100 }}
      />
    );
  }
}

export default EmployeeCard;
