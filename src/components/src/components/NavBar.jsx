import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-primary" fixed='top' style={{ backgroundColor: '#22498D' }}>
            <Container>
                <Navbar.Brand href="#home"><img src="./LogoSenai.svg" alt="LogoSenai" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">

                            <div className="form-floating mb-3" style={{ width: '400px' }}>
                                <input type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Elétrica"
                                />
                                <label htmlFor="floatingInput">Pesquise o nome do curso
                                <img src="lupa.svg" alt="" />
                                </label>
                            </div>

                        </Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;