import React from 'react'
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './style/Construcao.module.css'
import Layout from '../components/Layout';

const PinturaIndustrialDetalhamento = () => {
  return (
    <div>
      <Layout />

      <div className={styles.hidraulica}>
        <h2>Pintura Industrial</h2>
      </div>

      <div className={styles.hidraulica2}>
        <section className={styles.p1}>
          <h4>Objetivo</h4>
          <p>Iniciar o aluno nos conceitos e princípios básicos da hidráulica industrial, considerando normas e requisitos técnicos de qualidade, saúde e segurança do trabalho e de meio ambiente.</p>
        </section>

        <section className={styles.detalhes}>
          <h3>Pré-requisitos</h3>
          <p>Ter idade mínima de 16 anos</p>
          <p>Ensino Fundamental I completo.</p>
          <br />
          <p className={styles.pontoP}>ESTE CURSO É 100% PRESENCIAL, PORTANTO, TRATA-SE DE OFERTA APENAS PARA RESIDENTES DO ESTADO DO ESPÍRITO SANTO. OBSERVE O ENDEREÇO DA UNIDADE DA TURMA ESCOLHIDA.</p>
          <br />
          <p>DOCUMENTOS PARA MATRÍCULA</p>
          <p>Documento de identidade</p>
          <p>Comprovante de residência atualizado</p>
          <p>Comprovante de escolaridade ou autodeclaração de compatibilidade</p>
          <p>CPF</p>
        </section>

        <section className={styles.endDet}>
          <h4>Conteúdo</h4>
          <p>Preparação de Superfície para Pintura</p>
          <p>Pintura de Superfície</p>
          <p>Controle de Qualidade</p>
        </section>

        <div className={styles.card}>
          <Card className={styles.cardH}>
            <div className={styles.sob}>
              <p>ELETRÔNICA E AUTOMAÇÃO</p>
            </div>
            <Card.Img variant="top" src="pintura_industrial_1_18 1.svg" />
            <Card.Body>
              <Card.Text>
                <div>Aracruz</div>
                <br />
                <div>Presencial</div>
                <br />
                <div>40 horas</div>
                <br />
                <div>Início em 14/04/2025</div>
                <br />

                <Card.Text className={styles.bodyCard}>
                  <div>
                    Em até 1x de R$389,90
                  </div>
                  <div className={styles.endCard}>
                    Valor total do curso r$ 389,00 em 01x s/Juros R$ 389,00
                  </div>
                </Card.Text>
              </Card.Text>
              <Button variant="primary" className={styles.buton} style={{ backgroundColor: '#3840BA' }}>Matricular-se</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default PinturaIndustrialDetalhamento