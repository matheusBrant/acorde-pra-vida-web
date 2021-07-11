import React from "react";
import { Input, Form, Button, Select } from "antd";
const { Option } = Select;

export default function UserForm() {
  function handleFinish(object) {
    console.log(object);
  }

  return (
    <Form
      layout="vertical"
      onFinish={handleFinish}
    >
      <Form.Item label="E-mail">
        <Input value="José aldo" disabled/>
      </Form.Item>
      <Form.Item
        label="Nome"
      >
        <Input  value="josealdo@gmail.com" disabled/>
      </Form.Item>
    </Form>
  );
}
