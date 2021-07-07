import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends List</Link>
          </li>
          <li>
            <Link to="/addfriend">Add Friend</Link>
          </li>
        </ul>
        {/* switch, can use without exact */}
        <Switch>
          <PrivateRoute path="/friends" component={Friends} />
          <PrivateRoute path="/addfriend" component={AddFriend} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;