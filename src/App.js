import Navbar from './components/Navbar';
import Home from './components/Home';
import Add from './components/Add'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostDetails from './components/PostDetails';
import NotFound from './components/404';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/posts/:id">
              <PostDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
