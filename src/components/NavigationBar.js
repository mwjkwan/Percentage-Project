import { NavLink } from 'reactstrap';
import { Navbar, Nav } from 'react-bootstrap';
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="App">
      <Navbar expand="lg">
        <Navbar.Brand>The % Project</Navbar.Brand>
        <Nav>
          <NavLink href="/gallery">03. Gallery</NavLink>
          <NavLink href="/data">02. Data</NavLink>
          <NavLink href="/">01. Stories</NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;