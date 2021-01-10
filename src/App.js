import { Route, Switch, Redirect } from 'react-router-dom';
import PageStories from './pages/PageStories';
import PageData from './pages/PageData';
import PageGallery from './pages/PageGallery';
import { Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar fixed="top">
        <Nav>
          <Nav.Link href="/">01. Stories</Nav.Link>
          <Nav.Link href="/data">02. Data</Nav.Link>
          <Nav.Link href="/gallery">03. Gallery</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={PageStories} />
        <Route exact path="/data" component={PageData} />
        <Route exact path="/gallery" component={PageGallery} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;

/* <Navbar bg="dark" variant="pills" expand="lg" sticky="top" style={{position: "absolute", width: "100%"}}>
                        <Nav className='navigation' class="navbar navbar-expand-md navbar-fixed-top">

                            <Nav.Link onSelect={this.logout} href="/login">Logout</Nav.Link> 
                            <Nav.Link id="ghome" href="/home"  >Home</Nav.Link>
                            <Nav.Link id="bgroup" href="/groups" >Find a Group</Nav.Link>
                            <Nav.Link href="/goal">Goal Page</Nav.Link>
                            {/* <Button bsStyle="primary">Login</Button> */