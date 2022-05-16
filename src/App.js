import logo from './logo.svg';
import './App.css';
import {Router, Switch, Route } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import { Fragment } from 'react';
import HeaderHome from './_Components/HeaderHome';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/LoginPage/Login';
import HocDemo from './pages/HocDemo/HocDemo';
import HomePageMobile from './pages/HomePage/HomePageMobile';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate'
import AntDemo from './pages/AntDemo/AntDemo';
import PhoneIndex from './templates/PhoneIndex/PhoneIndex';


export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      
      <Switch>
        <Route path="/sassdemo" component={PhoneIndex}/>
        <HomeTemplate path='/login' component={Login} />
        <HomeTemplate path='/antd' component={AntDemo} />
        <HomeTemplate path='/home' component={HomePage} componentMobile={HomePageMobile}/>
        <HomeTemplate path='/' component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;


