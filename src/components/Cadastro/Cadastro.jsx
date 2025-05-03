import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulário foi enviado");

    if (!email || !senha || !nome || !idade) {
      setError('Preencha todos os campos!');
      return;
    }

    const idadeFormatada = parseInt(idade);
    if (isNaN(idadeFormatada)) {
      setError('Idade precisa ser um número válido!');
      return;
    }

    setError('');

    try {
      const respostaUsuario = await fetch("http://localhost:3002/usuarios", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, nome, idade: idadeFormatada, senha })
      });

      if (!respostaUsuario.ok) {
        throw new Error(`Erro na API: ${respostaUsuario.status}`);
      }

      const novoUsuario = await respostaUsuario.json();

      alert("Usuário cadastrado com sucesso!");

      const respostaLogin = await fetch("http://localhost:3002/logins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      });

      if (!respostaLogin.ok) {
        throw new Error(`Erro ao registrar login: ${respostaLogin.status}`);
      }

      console.log("Usuário cadastrado:", novoUsuario);

    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert(`Erro ao cadastrar usuário: ${error.message}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de e-mail</Form.Label>
        <Form.Control 
          placeholder="Digite seu e-mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          Nunca compartilharemos seu e-mail com mais ninguém.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nome</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Digite seu nome" 
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Idade</Form.Label>
        <Form.Control 
          type="number" 
          placeholder="Digite sua idade" 
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Digite sua senha" 
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit} style={{position:"relative", left:"25%"}}>
        Enviar
      </Button>

      <Button variant="secondary" onClick={() => setMostrarCadastro(false)} style={{ backgroundColor: '#02D80C', borderColor: '#02D80C', position:'relative', left:'35%'}}
              onMouseEnter={e => e.target.style.backgroundColor = '#019A09'}
              onMouseLeave={e => e.target.style.backgroundColor = '#02D80C'}>
        Voltar
      </Button>
    </Form>
  );
}

export default Cadastro;