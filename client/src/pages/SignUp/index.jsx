import "./SignUp.css";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import  Axios from 'axios'


export const SignUpPage = () => {
    const [usuarionome,setusuarionome] = useState('');
    const [usuarioemail, setusuarioemail] = useState('');
    const [usuariosenha, setusuariosenha] = useState('');
    const [usuariorepetirsenha, setusuariorepetirsenha] = useState('');

  const cadastarusuario = () => {

    console.log('teste 1')
    if(usuariosenha===usuariorepetirsenha){
      
      console.log('teste 2')

      Axios.post("http://localhost:3001/api/insertuser",{
      usuarioemail: usuarioemail,
      usuariosenha: usuariosenha,
      usuarionome: usuarionome,
        }).then(()=> alert('deu bom'))
    }
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
                <Input  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nome" onChange={(e)=> {
                  setusuarionome(e.target.value)

                }}
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
                  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" onChange={(e)=> {
                    setusuarioemail(e.target.value)
  
                  }}
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
                  prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Senha" onChange={(e)=> {
                    setusuariosenha(e.target.value)
  
                  }}
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
                  prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Repetir a senha" onChange={(e)=> {
                    setusuariorepetirsenha(e.target.value)
  
                  }}
                />
    
              </Form.Item>

    
    
                <div className="signupbutton">
                <Button type="primary" htmlType="submit" className="register-form-button"  onClick={cadastarusuario}
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