// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TraditionalInterface from './TraditionalInterface.js';
import AdminInterface from './AdminInterface';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={TraditionalInterface} />
          <Route path="/admin" component={AdminInterface} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
