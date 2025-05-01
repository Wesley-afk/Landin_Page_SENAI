import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Styles/login.module.css'
import Cadastro from '../Cadastro/Cadastro';
import { useState } from 'react';

function Login() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  //Declarando as variáveis para aprender a validar os campos
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [Error, setError] = useState("");

  //Criando a função para validar
  const handleSubmit = (e) =>{
      e.preventDefault(); //Garante que não vai recarregar toda a página, apenas os meus componentes

      if(!Email || !Senha){
          setError("Preencha todos os campos para proseeguir");
          return;
      }

      //Limpar o buffer para caso apareça mais algum erro
      setError("");
      alert("Autenticado com sucesso");

  }

  return (
  <>
   {Error && <p className={styles.error}>{Error}</p>}
    <Form>
    <div className={styles.email}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><p>Endereço de e-mail</p></Form.Label>
        <Form.Control type="email" placeholder="Inserir e-mail" onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><p>Senha</p></Form.Label>
        <Form.Control type="password" placeholder="Inserir senha" onChange={(e) => setSenha(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Guardar senha" className={styles.label}/>
      </Form.Group>

      <Button variant="primary" type="submit" style={{marginRight:'14%'}} onClick={handleSubmit}>
        Enviar
      </Button>
      <Button style={{ backgroundColor: '#02D80C', borderColor: '#02D80C'}}
              onMouseEnter={e => e.target.style.backgroundColor = '#019A09'}
              onMouseLeave={e => e.target.style.backgroundColor = '#02D80C'}
              onClick={() =>{setMostrarCadastro(!mostrarCadastro);
                            }}>
        Cadastrar
      </Button>
    </div>
    {mostrarCadastro && <> <Cadastro/> </>}
    </Form>
  </>
  );
}

export default Login;