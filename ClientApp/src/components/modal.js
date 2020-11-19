import React, { Component, Fragment } from "react";
import { Modal, Button } from "antd";

class FormModal extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <Fragment>
        <Button type="primary" onClick={this.showModal}>
          {this.props.modalText}
        </Button>
        <Modal
          width={700}
          footer={null}
          title="Basic Modal"
          visible={this.state.visible}
          //   onOk={this.handleOk}
          //   onCancel={this.handleCancel}
        >
          <this.props.form
            onCancel={this.handleCancel}
            closeModal={this.handleOk}
            handleSubmit={this.props.handleSubmit}
          />
        </Modal>
      </Fragment>
    );
  }
}

export default FormModal;
