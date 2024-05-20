import { Link } from 'react-router-dom';
import './Sidebar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Sidebar = () => {
  return (
    <Navbar sticky="top" expand="lg">
      <Container>
        <Nav className="me-auto flex-column">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/personajes">Personajes</Nav.Link>
          <Nav.Link as={Link} to="/hechizos">Hechizos</Nav.Link>
          <NavDropdown title="Casas de Hogwarts" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/personajes/Gryffindor">Gryffindor</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/personajes/Slytherin">Slytherin</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/personajes/Hufflepuff">Hufflepuff</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/personajes/Ravenclaw">Ravenclaw</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/personajes/ninguna">Ninguna</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

