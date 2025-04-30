import React from 'react'
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './style/Construcao.module.css'
import Layout from '../components/Layout';

const ConstrucaCivilDetalhamento = () => {

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  //   };

  // const navigate = useNavigate();

  return (
    <div>
      <Layout/>

      <div className={styles.hidraulica}>
        <h2>Fundamentos e tecnologias da construção civil</h2>
      </div>

      <div className={styles.hidraulica2}>
        <section className={styles.p1}>
          <h4>Objetivo</h4>
          <p>O curso de Fundamentos e Tecnologias da Construção Civil tem como objetivo desenvolver as capacidades básicas e socioemocionais que se aplicam aos diferentes processos de trabalho da área da construção civil – edificações, de forma a potencializar as condições do aluno para a aprendizagem e o desenvolvimento das capacidades técnicas específicas que caracterizam a atuação dos profissionais que atuam em atividades do campo operacional dessa área.</p>
        </section>

        <section className={styles.detalhes}>
          <h3>Pré-requisitos</h3>
          <p>Ter idade mínima de 16 anos</p>
          <p>Ensino Fundamental 2 completo.</p>
          <br />
          <p>DOCUMENTOS PARA MATRÍCULA</p>
          <p>Documento de identidade</p>
          <p>Comprovante de residência atualizado</p>
          <p>Comprovante de escolaridade ou autodeclaração de compatibilidade.</p>
          <p>CPF.</p>
        </section>

        <section className={styles.endDet}>
          <h4>Conteúdo</h4>
          <p>O conteúdo que abordaremos e aprenderemos neste curso:</p>
          <ul className={styles.Lista}>
            <li>FUNDAMENTOS MATEMÁTICOS;</li>
            <li>METROLOGIA</li>
            <li>ORGANIZAÇÃO DO AMBIENTE DE TRABALHO NA CONSTRUÇÃO CIVIL - EDIFICAÇÕES;</li>
            <li>MÁQUINAS, EQUIPAMENTOS E FERRAMENTAS DA CONSTRUÇÃO CIVIL;</li>
            <li>PROCESSOS CONSTRUTIVOS EMPREGADOS NA CONSTRUÇÃO CIVIL - CONCEITOS;</li>
            <li> MATERIAIS EMPREGADOS NA CONSTRUÇÃO CIVIL - EDIFICAÇÕES: TIPOS, CARACTERÍSTICAS E  APLICAÇÕES;</li>
            <li>ESTRUTURA E ORGANIZAÇÃO DO SEGMENTO DE CONSTRUÇÃO CIVIL - EDIFICAÇÕES;</li>
            <li>MEIO AMBIENTE;</li>
            <li>SAÚDE E SEGURANÇA.</li>
          </ul>
        </section>

        <div className={styles.card}>
          <Card className={styles.cardH}>
           <div className={styles.sob}>
             <p>ELETRÔNICA E AUTOMAÇÃO</p>
           </div>
            <Card.Img variant="top" src="/fundamentos_e_tecno_da_construcivil 1.svg" />
            <Card.Body>
              <Card.Text>
                <div>Vila Velha</div>
                <br />
                <div>Presencial</div>
                <br />
                <div>60 horas</div>
                <br />
                <div>Escolha sua turma</div>
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
              <Button variant="primary" className={styles.buton} style={{backgroundColor: '#3840BA'}}>Matricular-se</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div >
  )
}
export default ConstrucaCivilDetalhamento;