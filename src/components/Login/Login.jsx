import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Styles/login.module.css'
import Cadastro from '../Cadastro/Cadastro';
import { useState } from 'react';

function Login() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(true);

  return (
  <>
    <Form>
    <div className={styles.email}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><p>Endereço de e-mail</p></Form.Label>
        <Form.Control type="email" placeholder="Inserir e-mail" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><p>Senha</p></Form.Label>
        <Form.Control type="password" placeholder="Inserir senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Guardar senha" className={styles.label}/>
      </Form.Group>
      <Button variant="primary" type="submit" style={{marginRight:'14%'}}>
        Enviar
      </Button>
      <Button style={{ backgroundColor: '#02D80C', borderColor: '#02D80C'}}
              onMouseEnter={e => e.target.style.backgroundColor = '#019A09'}
              onMouseLeave={e => e.target.style.backgroundColor = '#02D80C'}
              onClick={() =>{setMostrarCadastro(!mostrarCadastro);
                             setMostrarLogin(!mostrarLogin);}}>
        Cadastrar
      </Button>
    </div>
    {mostrarLogin && !mostrarCadastro && <Login />}
    </Form>
  </>
  );
}

export default Login;