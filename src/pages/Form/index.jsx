import { Form, Input, Row, Col, Button } from "antd";

export const FormPage = () => {
  const handleFinish = (values) => {};

  return (
    <Form layout="vertical" onFinish={handleFinish}>
      <Row justify="center">
        <Col span={3}>
          <Form.Item name={["email"]} label="Email:">
            <Input placeholder="nome@email.com"></Input>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={3}>
          <Form.Item name={["senha"]} label="Senha">
            <Input placeholder="*******" type="password"></Input>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Button htmlType="button" type="primary">
          Entrar
        </Button>
      </Row>
    </Form>
  );
};
