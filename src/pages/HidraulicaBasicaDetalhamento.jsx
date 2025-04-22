import React from 'react'
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import styles from '../components/src/styles/hidraulica.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HidraulicaBasicaDetalhamento = () => {

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  //   };

  // const navigate = useNavigate();

  return (
    <div>
      <Layout />

      <div className={styles.hidraulica}>
        <h2>Hidráulica básica</h2>
      </div>

      <div className={styles.hidraulica2}>
        <section>
          <h4>Objetivo</h4>
          <p>Iniciar o aluno nos conceitos e princípios básicos da hidráulica industrial, considerando normas e requisitos técnicos de qualidade, saúde e segurança do trabalho e de meio ambiente.</p>
        </section>
        <section className={styles.detalhes}>
          <h3>Pré-requisitos</h3>
          <p>Ter idade mínima de 16 anos</p>
          <p>Ensino Fundamental I completo.</p>
          <br />
          <p>DOCUMENTOS PARA MATRÍCULA</p>
          <p>Cópia do documento de identidade;</p>
          <p>Cópia do comprovante de residência;</p>
          <p>Comprovante de escolaridade ou autodeclaração de compatibilidade;</p>
          <p>Cópia do CPF.</p>
        </section>
        <section>
          <h4>Conteúdo</h4>
          <p>Hidráulica industrial</p>
        </section>
        <div>
          <Card style={{ width: '18rem' }} className={styles.cardH}>
            <Card.Img variant="top" src="/hidraulica_4 1.svg" />
            <Card.Body>
              <Card.Title>Hidráulica básica</Card.Title>
              <Card.Text>
                pegar as informações do protótipopegar as informações do protótipopegar as informações do protótipo
              </Card.Text>
              <Button variant="primary">Matricular-se</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default HidraulicaBasicaDetalhamento