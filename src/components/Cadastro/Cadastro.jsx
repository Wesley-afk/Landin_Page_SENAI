import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Login from '../Login/Login';
import { useState } from 'react';

function Cadastro() {
    const [mostrarLogin, setMostrarLogin] = useState(false);
    
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de e-mail</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Nunca compartilharemos seu e-mail com mais ninguém.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Cadastro;