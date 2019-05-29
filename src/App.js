import React, { Component } from 'react';
import './App.css';
import IndexPage from './component/page/IndexPage';
import FormPage from './component/page/FormPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, path: '/', component: IndexPage, exact: true },
        { id: 1, path: '/form', component: FormPage, exact: true },
        { id: 1, path: '/form/:new', component: FormPage, exact: false }
      ]
    }

  }
  render() {
    return (
      <Router>
        <Switch>
          {this.state.data.map(data => (
            <Route key={data.id} path={data.path} component={data.component} exact={data.exact}></Route>
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;