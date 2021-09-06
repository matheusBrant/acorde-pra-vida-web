import "./Login.css";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useUserContext } from "../../context/UserContext";

export const LoginPage = () => {
  const { setUser, setIsUserLogged } = useUserContext()
  let history = useHistory();

  const [finish, setFinish] = useState(false);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [usuarioemail, setusuarioemail] = useState('');
  const [usuariosenha, setusuariosenha] = useState('');

  const login = () => {
    axios.post('https://acordepravida-api.herokuapp.com/api/login', {
      email: usuarioemail,
      password: usuariosenha
    })
    .then((response) => {
      console.log(response.data.user);
      localStorage.setItem('user',JSON.stringify(response.data.user))
      setUser(response.data.user);
      setIsUserLogged(true);
      history.push('/home');
    }, (error) => {
      Swal.fire({
        title: "Credenciais incorretas",
        text: "Verifique os campos e preencha novamente!",
        icon: "error",
      });
      console.log('erro',error);
    });
  }

  
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
              onClick={login}            
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
