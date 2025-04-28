import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Layout from '../components/Layout';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardText from 'react-bootstrap/esm/CardText';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const navigate = useNavigate();

  // Eu tenho que clicar no matricular-se e ele tem que me levar para a página

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '94vh',
          margin: '0',
          padding: '0',
          overflow: 'hidden',
        }}
      >
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{
            width: '100%',
            position: 'absolute',
            top: '12vh',
            left: 0,
          }}
        >
          <Carousel.Item style={{ height: '100%' }}>
            <img
              className="d-block w-100"
              src="/imgSenai.svg"
              alt="Chegue rápido no mercado de trabalho"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                display: 'block',
              }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: '100%' }}>
            <img
              className="d-block w-100"
              src="/imgSenai.svg"
              alt="Second slide"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                display: 'block',
              }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: '100%' }}>
            <img
              className="d-block w-100"
              src="/imgSenai.svg"
              alt="Third slide"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                display: 'block',
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Título da sessão */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginTop: '-98px',
          padding: '20px',
        }}
      >
        <img src="/barra.svg" alt="barra" />
        <div>
          <div style={{ margin: 0, fontWeight: 'bold' }}>Cursos em alta</div>
          <h6 style={{ margin: 0 }}>ESCOLHA O CURSO</h6>
        </div>
      </div>

      {/* --------------------------------------------------cards-------------------------------------------------- */}
      <Container style={{ marginTop: '30px', marginBottom: '60px' }}>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/hidraulica_4 1.svg" style={{ display: "inline-block", alignItems: "center", border: "20px" }} />
              {/* width: '120%', */}
              <Card.Body>
                <Card.Title>Hidráulica</Card.Title>
                <Card.Text style={{ height: '13', justifyContent: 'flex-start', fontWeight: '', fontStyle: 'normal', textAlign: "initial" }}>
                  {/* <p>Aracruz</p>
                  <p>Presencial</p>
                  <p>40 horas</p>
                  <p>Início em 14/04/2025</p> */}

                  <div>Aracruz</div>
                  <div>Presencial</div>
                  <div>40 horas</div>
                  <div>Início em 14/04/2025</div>

                  <CardText style={{ color: 'blue', textJustify: 'revert-layer' }}>
                    <div style={{
                      fontSize: "20px", fontWeight: "bold",
                      textAlign: "end"
                    }}>Em até 1x de R$389,90
                    </div>

                    <div style={{ fontSize: '12px', color: "#4E4E4E" }}>Valor total do curso r$ 389,00 em 01x s/Juros R$ 389,00</div>
                  </CardText>
                </Card.Text>
                <Button variant="primary" style={{ width: '100%', backgroundColor: '#3840BA' }} onClick={() => navigate('/HidraulicaBasicaDetalhamento')}>Matricule-se</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* --------------------------------------------------cards-------------------------------------------------- */}
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/pintura_industrial_1_18 1.svg" style={{ display: "inline-block", alignItems: "center", border: "20px" }} />
              <Card.Body>
                <Card.Title>Pintura industrial</Card.Title>
                <Card.Text style={{ height: '13', justifyContent: 'flex-start', fontWeight: '', fontStyle: 'normal', textAlign: "initial" }}>
                  {/* <p>São Mateus</p>
                  <p>Presencial</p>
                  <p>60 horas</p>
                  <p>Início em 05/05/2025</p> */}

                  <div>São Mateus</div>
                  <div>Presencial</div>
                  <div>60 horas</div>
                  <div>Início em 05/05/2025</div>

                  <CardText style={{ color: 'blue', textJustify: 'revert-layer' }}>
                    <div style={{
                      fontSize: "20px", fontWeight: "bold",
                      textAlign: "end"
                    }}>Em até 1x de R$809,90
                    </div>

                    <div style={{ fontSize: '12px', color: "#4E4E4E" }}>Valor total do curso r$ 389,00 em 01x s/Juros R$ 389,00</div>
                  </CardText>
                </Card.Text>
                <Button variant="primary" style={{ width: '100%', backgroundColor: '#3840BA' }} onClick={() => navigate('/PinturaIndustrialDetalhamento')}>Matricule-se</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* --------------------------------------------------cards-------------------------------------------------- */}
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/fundamentos_e_tecno_da_construcivil 1.svg" style={{ display: "inline-block", alignItems: "center", border: "20px" }} />
              <Card.Body>
                <Card.Title>Fundamentos e tecnologias da construção civil</Card.Title>
                <Card.Text style={{ height: '13', justifyContent: 'flex-start', fontWeight: '', fontStyle: 'normal', textAlign: "initial" }}>
                  {/* <p>Vila Velha</p>
                  <p>Presencial</p>
                  <p>60 horas</p> */}

                  <div>Vila Velha</div>
                  <div>Presencial</div>
                  <div>60 horas</div>

                  <CardText style={{ color: 'blue', textJustify: 'revert-layer' }}>
                    <div style={{
                      fontSize: "20px", fontWeight: "bold",
                      textAlign: "end"
                    }}>Em até 1x de R$428,73</div>
                    <div style={{ fontSize: '12px', color: "#4E4E4E" }}>Valor total do curso r$ 428,73 em 01x s/Juros R$  428,73</div>
                  </CardText>

                </Card.Text>
                <Button variant="primary" style={{ width: '100%', backgroundColor: '#3840BA' }} onClick={() => navigate('/ConstrucaCivilDetalhamento')}>Matricule-se</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  );
}

export default ControlledCarousel;