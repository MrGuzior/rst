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
import Flight from '../Flight/Flight'
import headerBackground from '../../db/headerBackground.jpeg'

function App() {
  return (
    <>
      <Router>
          <div className='header-background'></div>
          <Nav/>
          <Switch>
            
            <Route exact path='/' component={Home}/>    
            
            <Route path='/results' component={Results}/>

            <Route path='/flights/:id' component={Flight}/>
              
          </Switch>
      </Router>
    </>
  )
}

export default App;
