import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import './App.css'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Results from '../Results/Results'

function App() {
  return (
    <>
      <Router>
          <Nav/>
          <Switch>
            
            <Route exact path='/' component={Home}/>    
            
            <Route path='/results' component={Results}/>
              
          </Switch>
      </Router>
    </>
  )
}

export default App;
