import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Login from './Login/Login';
import styles from './Login/styles/login.module.css';

function BasicExample() {
    const [mostrarLogin, setMostrarLogin] = useState(false);

    return (
    <>
        <Navbar expand="lg" className="bg-body-primary"fixed='top' style={{ backgroundColor: '#22498D', display: 'flex', alignItems: 'center', height:'11vh'}}>
            <Container>
                <Navbar.Brand href="#home"><img src="./LogoSenai.svg" alt="LogoSenai" /></Navbar.Brand>
                <NavDropdown color='#FFFFFF' title="=" id="basic-nav-dropdown">
                
                    <NavDropdown.Item href="#action/3.1">Nossa história!</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Logar</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Usuários</NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">

                            <div className="form-floating mb-3" style={{ width: 900, display: 'flex', alignItems: 'center' }}>
                                <input type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    style={{
                                    position:'relative',
                                    top:'3vh',
                                    height:'4vh',
                                    width:'50vw',
                                    padding:'1%',
                                    backgroundColor:'white',
                                    
                                    }}
                                />
                                </div>
                                <label htmlFor="floatingInput" 
                                style={{
                                    position:'relative',
                                    bottom:'5vh',
                                    left:'1vw'
                                }}>Pesquise o nome do curso <img src="lupa.svg" alt="Buscar" />
                                </label>
                        </Nav.Link>
                        <img src="/user.svg" alt="Icone do usuário" onClick={() => setMostrarLogin(!mostrarLogin)}/>
                        <p style={{
                            color:'white',
                            marginTop:'2%'
                        }}>
                        Olá, faça login ou cadastre-se
                        </p>
                    </Nav>
                    {mostrarLogin && <div className={styles.LayOutLogin}><Login/></div>}
                </Navbar.Collapse>
            </Container>
        </Navbar >
     </>
    );
}

export default BasicExample;