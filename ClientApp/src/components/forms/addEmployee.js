import React, { Component, Fragment } from "react";
import { Form, Input, Button, Checkbox } from "antd";

class FormEmployee extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = { employeesTableData: [] };
  }
  onFinish = (values) => {
    console.log("Success:", values);
    this.props.handleSubmit(values)
    this.props.closeModal();
    this.formRef.current.resetFields();
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <Form
        name="basic"
        layout="vertical"
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
          label="Delivery Pincode"
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
          label="Salary"
          name="salary"
          rules={[
            {
              required: false,
              message: "Please input your salary!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item> */}

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
  }

export default FormEmployee;
