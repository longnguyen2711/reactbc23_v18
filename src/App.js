import logo from './logo.svg';
import './App.css';
import {Router, Switch, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import { Fragment } from 'react';
import HeaderHome from './_Components/HeaderHome';
import HomePage from './pages/HomePage/HomePage';

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={'/'} render={(propsRoute) =>{ // location, history, 
          return <Fragment>
            <HeaderHome />
            <HomePage {...propsRoute}/>
          </Fragment>}}/>    
      </Switch>
    </Router>
  );
}

export default App;
