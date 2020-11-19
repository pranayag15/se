import React, { Component } from "react";
import { Button, message, Row, Table, PageHeader, Statistic, Card, Tag } from "antd";
class DeliveryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerData: [],
      totalBill: 0,
      totalDeliveries: 0,
      isPaid: false
    };
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  componentDidMount() {
    let data = [],
      totalDeliveries = 0;
    data = this.props.customer.magazine.map((mag) => {
      let deliveries = this.randomIntFromInterval(20, 50),
        price = this.randomIntFromInterval(12, 32);
      totalDeliveries += deliveries;
      return {
        magzinename: mag,
        deliveries: deliveries,
        price: price,
        total: price * deliveries,
      };
    });
    let totalBill = 0;
    data.map((mg) => {
      totalBill += mg.price * mg.deliveries;
    });
    this.setState({
      totalBill: totalBill,
      customerData: data,
      totalDeliveries: totalDeliveries,
    });
    // return data;
  }

  onMakePaymentClick = async (e) => {
    e.preventDefault();
    const options = {
      key: "rzp_test_fxQWpg9T0PNBq5",
      amount: this.state.totalBill*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Newspaper Automation",
      description: "Test Transaction",
      // image: "./payment-logo.png",
      // order_id: "order_EzQUQXf4287lDb",
      handler: (response) => {
        message.success("Payment successful!");
        message.success(response.razorpay_payment_id);
        // message.success(response.razorpay_signature);
        this.setState({isPaid: true})
      },
      prefill: {
        name: "Pranay Agarwal",
        email: "pranay.agarwal@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#528FF0",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  handlePaymentDone = () => {
    this.setState({isPaid: true})
  }

  render() {
    let { customer } = this.props;
    return (
      <div>
        <Card>
          <PageHeader className="site-page-header" title={customer.name} subTitle={customer.address} >
            <Row>
              <Statistic
                title="Billing Amount"
                value={"₹" + this.state.totalBill}
              />
              <Statistic
                title="Delivered magzines"
                value={this.state.totalDeliveries}
                style={{ margin: "0 32px" }}
              />
              <Statistic
                title="Issed from"
                value={customer.issueDate}
                style={{
                  margin: "0 32px",
                }}
              />
              <Statistic
                title="End Date"
                value={customer.endDate}
                style={{
                  margin: "0 32px",
                }}
              />
              <Button
              style={{
                width: "250px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              disabled={this.state.isPaid}
              onClick={this.onMakePaymentClick}
              // className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Make Payment
            </Button>
            </Row>
            <Tag style={{fontSize: "20px"}} color={this.state.isPaid ? "green" : "red"}>{this.state.isPaid ? "Paid" : "Not Paid"}</Tag>
          </PageHeader>
        </Card>
        <br />
        <Table dataSource={this.state.customerData} columns={columns} />
        <br />
        {/* <Button onClick={() => this.props.handleShowTable(false)}>
          Go Back
        </Button> */}
      </div>
    );
  }
}

export default DeliveryTable;

const columns = [
  // {
  //   title: "Customer Name",
  //   dataIndex: "customername",
  //   key: "customername",
  // },
  // {
  //   title: "Customer Address",
  //   dataIndex: "address",
  //   key: "address",
  // },
  {
    title: "Magazine Name",
    dataIndex: "magzinename",
    key: "magzinename",
  },
  {
    title: "Deliveries",
    dataIndex: "deliveries",
    key: "deliveries",
  },
  {
    title: "Per pice price",
    dataIndex: "price",
    key: "price",
    render: (price) => (
      <p>
        ₹{""}
        {price}
      </p>
    ),
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    render: (price) => (
      <p>
        ₹{""}
        {price}
      </p>
    ),
  },
];
const dataSource = [
  {
    deliveries: "19",
    customername: "Karan Gupta",
    address: "HIG-123, Vijay Nagar",
    magzinename: "Bal hans",
    price: "12",
  },
];
