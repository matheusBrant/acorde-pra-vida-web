import "./SignUp.css";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";


export const SignUpPage = () => {
    const [finish, setFinish] = useState(false);
  
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };


    return (
        <>
          <div className="signup-container">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >



            <Form.Item
                name="Name"
                rules={[
                  {
                    required: true,
                    message: "Informe o seu nome!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Nome"
                />
              </Form.Item>

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
    
                
              <Form.Item
                name="repeatpassword"
                rules={[
                  {
                    required: true,
                    message: "Informe novamente a senha",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Repetir a senha"
                />
    
              </Form.Item>

    
    
                <div className="signupbutton">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="register-form-button"
                  loading="false"
                >
                  Cadastrar
                </Button>
                </div >

                <p className="registrar">Possui uma conta? <a href="/login">Logar</a> </p>
    
            </Form>
          </div>
        </>
      );

};