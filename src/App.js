import { Route, Switch, Redirect } from 'react-router-dom';
import PageStories from './pages/PageStories';
import PageData from './pages/PageData';
import PageGallery from './pages/PageGallery';
import './assets/fonts/typography.css';

function App() {
  return (
    <div className="App">
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
