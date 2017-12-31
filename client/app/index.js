import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';

import HelloWorld from './components/HelloWorld/HelloWorld';

import Stars from './components/Stars/Stars';
import TextBox from './components/TextBox/TextBox';
import Dropdown from './components/Dropdown/Dropdown';
import RoomViewer from './components/RoomViewer/RoomViewer';

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/helloworld" component={HelloWorld}/>
		  <Route path="/stars" component={Stars}/>
        <Route path="/textbox" component={TextBox}/>
        <Route path="/dropdown" component={Dropdown}/>
        <Route path="/roomviewer" component={RoomViewer}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
