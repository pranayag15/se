import React, { Component } from "react";
import { Button, Col, Row, Table, PageHeader, Statistic, Card } from "antd";
class DeliveryTable extends Component {
  constructor(props) {
    super(props);
    this.state = { employeesTableData: [] };
  }
  render() {
    let today = new Date();
    let date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    let deliveries = 0;
    dataSource[this.props.username].map(
      (item) => (deliveries += Number(item.deliveries))
    );
    console.log(deliveries, "ddlldld");
    return (
      <div>
        <Card>
          <PageHeader
            className="site-page-header"
            title={this.props.selectedObject.name + " Deliveries"}
          >
            <Row>
              <Statistic title="Total Deliveries" value={deliveries} />
              <Statistic
                title="Date"
                value={date}
                style={{
                  margin: "0 32px",
                }}
              />
            </Row>
          </PageHeader>
        </Card>
        <br />
        <Table dataSource={dataSource[this.props.username]} columns={columns} />
        <br />
        <Button onClick={() => this.props.handleShowTable(false)}>
          Go Back
        </Button>
      </div>
    );
  }
}

export default DeliveryTable;

const columns = [
  {
    title: "No of Deliveries",
    dataIndex: "deliveries",
    key: "deliveries",
  },
  {
    title: "Customer Name",
    dataIndex: "customername",
    key: "customername",
  },
  {
    title: "Customer Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Newspaper/Magazine",
    dataIndex: "magzinename",
    key: "magzinename",
  },
];
const dataSource = {
  anmolabc: [
    {
      deliveries: "2",
      customername: "Karan Gupta",
      address: "HIG-12, Vijay Nagar",
      magzinename: "Bal hans",
    },
    {
      deliveries: "1",
      customername: "Mayank Bhatnagar",
      address: "KIG-83, Vijay Nagar",
      magzinename: "Sarita",
    },
    {
      deliveries: "4",
      customername: "Nikunj Rastogi",
      address: "KIG-83, Vijay Nagar",
      magzinename: "Economics Daily",
    },
    {
      deliveries: "2",
      customername: "Dhruv Rathee",
      address: "KIG-83, Vijay Nagar",
      magzinename: "Economics Daily",
    },
  ],
  sachinboy: [
    {
      deliveries: "1",
      customername: "Karan Gupta2",
      address: "HIG-12, Vijay Nagar",
      magzinename: "Bal hans",
    },
    {
      deliveries: "2",
      customername: "Mayank Bhatnagar",
      address: "KIG-83, Vijay Nagar",
      magzinename: "Sarita",
    },
    {
      deliveries: "4",
      customername: "Nikunj Rastogi",
      address: "KIG-83, Vijay Nagar",
      magzinename: "Economics Daily",
    },
    {
      deliveries: "3",
      customername: "Dhruv Rathee",
      address: "KIG-83, Vijay Nagar",
      magzinename: "Economics Daily",
    },
  ],
  amitchopra: [
    {
      deliveries: "1",
      customername: "Karan Gupta3",
      address: "HIG-12, Vijay Nagar",
      magzinename: "Bal hans",
    },
    {
      deliveries: "2",
      customername: "Mayank Bhatnagar",
      address: "KIG-83, Vijay Nagar",
      magzinename: "Sarita",
    },
    {
      deliveries: "4",
      customername: "Nikunj Rastogi",
      address: "KIG-83, Vijay Nagar",
      magzinename: "Economics Daily",
    },
    {
      deliveries: "58",
      customername: "Dhruv Rathee",
      address: "KIG-83, Vijay Nagar",
      magzinename: "Economics Daily",
    },
  ],
};
