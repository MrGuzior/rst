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

function App() {
  const data = useSelector(selectData)

  console.log(data)

  return (
    <>
      <Nav/>
      <Router>
          <Switch>
            
            <Route exact path='/'>
              <Home/>
            </Route>

          </Switch>
      </Router>
    </>
  );
}

export default App;
