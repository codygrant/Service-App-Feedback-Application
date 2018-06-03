import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';  // connection helper so App class can call action creator
import * as actions from '../actions';  // take all actions in file and assign to 'actions'

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header/>
            <Route exact path={"/"} component={Landing}/>
            <Route exact path={"/surveys"} component={Dashboard}/>
            <Route path={"/surveys/new"} component={SurveyNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);