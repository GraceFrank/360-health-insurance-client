import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Login, UserDashBoard, AdminDashBoard, Register } from '../pages/index';

const Routes = ({ user }) => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={UserDashBoard} />
    </Router>
  );
};

export default Routes;
