import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const router = express.Router()

const db = mysql.createPool({
  // configuração de acesso
  host: '127.0.0.1',
  database: 'AcordePraVida',
  user: 'root',
  password: '123456',
  port: 3306,

  // configuração das conexões
  multipleStatements: true,

  // configuração da pool
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',  (req, res)=>{

  res.send('hello world');

});





app.post('/api/insertuser',(req,res) => {


console.log('teste 3');

   const usuarioemail = req.body.usuarioemail;
   const usuariosenha = req.body.usuariosenha;
   const usuarionome = req.body.usuarionome;

   
  //res.send(usuarioemail+usuariosenha+usuarionome);

   const sqlInsertUser = "INSERT INTO usuario (usuarioid,ativo,email,emailconfirmado,senha,nome,funcaoid) VALUES (NULL,true,?,true,?,?,2)"

   db.query(sqlInsertUser,[usuarioemail,usuariosenha,usuarionome], (error,result)=>{
     res.send(result);
   })
  
});

app.listen(3001, ()=> {
    console.log('listening on port 3001');
});