import "./Login.css";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";

export const LoginPage = () => {
  const [finish, setFinish] = useState(false);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div className="login-container">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Informe o seu email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Informe sua senha!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Senha"
            />


          </Form.Item>

             <Form.Item>
                  <a className="login-form-forgot" href="/recoverpassword"> Esqueci a senha</a>
             </Form.Item>
            
            {/* <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Mantenha-me logado</Checkbox>
              </Form.Item> */}



            <div className="loginbutton">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading="false"
            >
              Log in
            </Button>
            </div >







            <p className="registrar">Não possui uma conta? <a href="/signup">Registrar-se</a> </p>




        </Form>
      </div>
    </>
  );
};
