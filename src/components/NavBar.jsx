import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Login from './Login/Login';
import styles from './Login/styles/login.module.css';
import stales from './src/components/Nav.module.css'
import { useNavigate } from 'react-router-dom';
import Home from "../pages/Home"

function BasicExample() {
    const navigate = useNavigate();
    const [mostrarLogin, setMostrarLogin] = useState(false);
    const [home, setHome] = useState(false);

    return (
        <>
            <Navbar expand="lg" className="bg-body-primary" fixed='top' 
                    style={{
                         backgroundColor: '#0746B4',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         maxHeight: '11%',
                         overflow: 'hidden',
                    }}>
                <Container>
                    {/* Ajustar o estilo da navbar */}
                      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                      {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                        {/* imagem da logo do senai */}
                        <Navbar.Brand href="#home" style={{padding: '0', maxWidth: '150px', width: '100%'}} onClick={() => setHome(!home)}>
                            <img
                                src="./LogoSenai.svg"
                                alt="LogoSenai" 
                                style={{
                                         width: '100%',
                                         height: 'auto',
                                         display: 'block',
                                         cursor: 'pointer'
                                }}     
                            />
                        </Navbar.Brand>

                        {/* Parte que leva para a história <> */}
                        <NavDropdown color='#FFFFFF' title="Menu" id="basic-nav-dropdown"
                            style={{
                                position:'relative',
                                color: 'white',
                            }}>
                            {/* Parte que leva para a história </> */}

                            <div style={{overflow: 'visible', position:'relative'}}>
                                <NavDropdown.Item href="#action/3.1" onClick={() => navigate('/Historia')} style={{overflow:'visible', position:'relative'}}>Nossa história!</NavDropdown.Item>
                                <NavDropdown.Item href='#action/3.2'></NavDropdown.Item>
                                <NavDropdown.Divider />
                            </div>
                        </NavDropdown>

                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                        {/* Desativar o navbar collapse depois */}
                        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                        <Nav className="me-auto d-flex align-items-center">
                            <Nav.Link href="#home" style={{padding:'0'}}>

                                {/* Área de pesquisa */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInput"
                                        style={{
                                            position:'relative',
                                            left:'28%',
                                            overflow:'visible'
                                        }}
                                    />
                                </div>
                                <label htmlFor="floatingInput"
                                    style={{
                                        // display: 'inline-flex',
                                        position: 'absolute',
                                        left:'24%',
                                        bottom: '2vh',
                                        fontSize: 'clamp(2px, 2.3vw, 15px)'
                                    }}>
                                        Pesquise o nome do curso <img src="lupa.svg" alt="Buscar" />
                                </label>
                            </Nav.Link>
                            <img src="/user.svg" alt="Icone do usuário" onClick={() => setMostrarLogin(!mostrarLogin)} style={{
                                position: 'absolute',
                                right: '29%',
                                top: '32%',
                                height: 'auto',
                                cursor: 'pointer'
                                // Mexer um pouco aqui ainda
                            }} />
                            <p style={{
                                color: 'white',
                                position: 'absolute',
                                right: '20%',
                                width: '8%',
                                height: 'auto',
                                fontSize: 'clamp(20px, auto, 2vh)',
                                top: '20%',
                            }}>
                                Logue ou cadastre-se
                            </p>

                            <Nav.Link href="#home">
                                <label htmlFor="floatingInput">
                                    <img src="/FavoritarCurso.svg" style={{
                                        position: 'absolute',
                                        top: '34%',
                                        right: '18%',
                                        height: 'auto'
                                    }} />
                                </label>
                            </Nav.Link>
                        </Nav>
                        {home && <Home/>}
                        {mostrarLogin && <div className={styles.LayOutLogin}><Login /></div>}
                        {/* </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </>
    );
}
export default BasicExample;