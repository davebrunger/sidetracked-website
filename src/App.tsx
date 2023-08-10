import { Container, Nav, Navbar } from 'react-bootstrap'
import Band from "/images/Band.jpg?url";
import Sidetracked from "/images/Sidetracked.png?url";
import { Gigs } from './components/Gigs';
import { Performers } from './components/Performers';
import "./App.css"

function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Sidetracked</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#performers">Performers</Nav.Link>
              <Nav.Link href="#gigs">Gigs</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact & Social</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container id="main">
        <img src={Band} style={{ width: "100%" }} id="home" />
        <div className="text-center">
          <img src={Sidetracked} style={{ width: "100%", maxWidth: "700px" }} />
        </div>
        <Performers id="performers" />
        <h2 className="text-center" id="gigs">
          Gigs
        </h2>
        <Gigs />
        <h2 className="text-center" id="about">
          About
        </h2>
        <p className="text-center">
          Sidetracked are a group of friends that started jamming and performing together at school in Faversham.
          Still at school they are now performing at local festivals.
        </p>
        <h2 className="text-center" id="contact">
          Contact & Social
        </h2>
        <div className="text-center">
          <i className="bi bi-instagram"></i>{' '}<a href="https://instagram.com/sidetracked_bnd" target='_blank'>@sidetracked_bnd</a>
        </div>
        <div className="text-center">
          <i className="bi bi-envelope-open-fill"></i>{' '}<a href="mailto:contact@sidetrackedtheband.com">contact@sidetrackedtheband.com</a>
        </div>
      </Container >
      <Navbar bg="light" className="sticky-bottom">
        <Container>
          &copy; Copyright: Sidetracked 2023
        </Container>
      </Navbar>
    </>
  )
}

export default App
