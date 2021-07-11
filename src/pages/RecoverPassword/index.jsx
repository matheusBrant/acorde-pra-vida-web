
import "./RecoverPassword.css";
import { useState } from "react";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export const RecoverPasswordPage = () => {

    const [finish, setFinish] = useState(false);

    const onFinish = (values) => {
      console.log("Received values of form: ", values);
  };

    return (
        <>
          <div className="recoverpassword-container">
            <Form name="normal_login" className="recoverpassowrd-form"
              initialValues={{
                remember: true,
              }}

              onFinish={onFinish}>

      
              <p className="title">Informe seu email de cadastro para que possamos lhe enviar um e-mail para redefinir sua senha.</p>


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


                <div className="recoverpasswordbutton">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="recoverpassword-form-button"
                  loading="false"
                >
                  Recuperar
                </Button>
                </div >
    
    
                <p className="registrar">Não possui uma conta? <a href="/signup">Registrar-se</a> </p>
    
    
            </Form>
          </div>
        </>
      );

};