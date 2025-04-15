import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    const [mostrarLogin, setMostrarLogin] = useState(false);

    return (
        <Navbar expand="lg" className="bg-body-primary" fixed='top' style={{ backgroundColor: '#22498D', display: 'flex', alignItems: 'center' }}>
            <Container>
                <Navbar.Brand href="#home"><img src="./LogoSenai.svg" alt="LogoSenai" /></Navbar.Brand>
                <NavDropdown color='#FFFFFF' title="=" id="basic-nav-dropdown">
                
                    <NavDropdown.Item href="#action/3.1">Colocar um link para a história do senai</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        tela de login
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">nem sei</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        nem sei 2
                    </NavDropdown.Item>
                </NavDropdown>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">

                            <div className="form-floating mb-3" style={{ width: 900, display: 'flex', alignItems: 'center' }}>
                                <input type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Elétrica"
                                />
                                <label htmlFor="floatingInput">Pesquise o nome do curso <img src="lupa.svg" alt="Buscar" />
                                </label>
                            </div>
                        </Nav.Link>
                        <span style={{
                            color: 'white',
                            padding: '4px 0',
                            fontSize: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            paddingBottom: '15px',
                            paddingLeft: '50px'
                        }}>
                            <img src="/user.svg" alt="Icone do usuário" onClick={() => setMostrarLogin(!mostrarLogin)} />
                            Olá, faça login ou cadastre-se
                        </span>
                        {mostrarLogin && (
                            <div>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Digite seu e-mail"
                                    className="mb-3"
                                    style={{
                                        position: "absolute",
                                        padding: '3px',
                                        borderRadius: "5%",
                                        alignItems: "center",
                                        backgroundColor: "#FFFFFF",
                                        right: "5%",
                                        top: "120%",

                                    }}
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingPassword"
                                    label="Digite a senha"
                                    style={{
                                        position: "absolute",
                                        padding: '3px',
                                        borderRadius: "5%",
                                        alignItems: "center",
                                        backgroundColor: "#FFFFFF",
                                        right: "5%",
                                        top: "185%",

                                    }}>
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default BasicExample;