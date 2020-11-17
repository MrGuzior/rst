import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import './App.css';
import {useSelector} from 'react-redux'
import {selectData} from '../../store/appSlice'

import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Results from '../Results/Results'

function App() {
  const data = useSelector(selectData)

  console.log(data)

  return (
    <>
      <Router>
      <Nav/>
      <a href='/'>RST</a>
          <Switch>
            
            <Route exact path='/' component={Home}>
              <Home/>
            </Route>
            <Route exact path='/results' component={Results}>
              <Results/>
            </Route>

          </Switch>
      </Router>
    </>
  );
}

export default App;
