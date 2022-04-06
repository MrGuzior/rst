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
import Contact from '../Contact/Contact'
import Register from '../Register/Register'
import Rules from '../Rules/Rules'
import Flight from '../Flight/Flight'
import Login from '../Login/Login'
import NewResult from '../NewResult/NewResult'
import Map from '../Map/Map'
import Profile from '../Profile/Profile'
import 'leaflet/dist/leaflet.css'

function App() {
  return (
    <>
      <Router>
          <div className='header-background'></div>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Home}/>    
            <Route path='/results/:category?/:league?/:segment?' component={Results}/>
            <Route path='/flights/:id' component={Flight}/>
            <Route path='/new-result' component={NewResult}/>
            <Route path='/map' component={Map}/>
            <Route path='/login' component={Login}/>
            <Route path='/profile' component={Profile}/> 
            <Route path='/rules' component={Rules}/> 
            <Route path='/register' component={Register}/> 
            <Route path='/contact' component={Contact}/> 
          </Switch>
      </Router>
    </>
  )
}

export default App
