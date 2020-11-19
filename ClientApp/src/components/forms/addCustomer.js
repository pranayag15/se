import React, { Component, Fragment } from "react";
import { Form, Input, Button, DatePicker, Select } from "antd";
const { Option } = Select;
class FormEmployee extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      issueDate: "",
      endDate: "",
      billDate: "",
      magzines: [
        "Champak", "Economic Times", "Glamour", "Sports King", "Chacha Chaoudhary"
      ]
    };
  }
  onFinish = (values, some) => {
    console.log("Success:", values);
    this.props.handleSubmit(values);
    this.props.closeModal();
    this.formRef.current.resetFields();
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // onChange = (date, dateString) => {

  // }

  render() {
    return (
      <Form
        name="basic"
        layout="horizontal"
        initialValues={{}}
        ref={this.formRef}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: false,
              message: "Please input email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Pincode"
          name="pincode"
          rules={[
            {
              required: true,
              message: "Please input your pincode!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: false,
              message: "Please input your address!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
        label="Magzines"
        name="magazine"
        rules={[
          {
            required: true,
            message: "Please input magazine!",
          },
        ]}
        >
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select magzines"
            
          >
            {this.state.magzines.map((mag, i) => <Option value={mag} key={i}>{mag}</Option>)}
          </Select>
        </Form.Item>
        <Form.Item
          label="Issue Date"
          name="issueDate"
          rules={[
            {
              required: true,
              message: "Please input issue date!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="End Date"
          name="endDate"
          rules={[
            {
              required: false,
              message: "Please input end date!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Bill Date"
          name="billDate"
          rules={[
            {
              required: false,
              message: "Please input bill date!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Payment Mode"
          name="paymentMode"
          rules={[
            {
              required: false,
              message: "Please input payment mode!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Payment status"
          name="paymentStatus"
          rules={[
            {
              required: false,
              message: "Please input status!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Subscription Status"
          name="subscriptionStatus"
          rules={[
            {
              required: false,
              message: "Please input Subscription Status!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button key="back" onClick={this.props.onCancel}>
            Return
          </Button>
          <Button style={{ marginLeft: "2%" }} htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const tailLayout = {
  wrapperCol: {
    offset: 16,
    span: 8,
  },
};

export default FormEmployee;
