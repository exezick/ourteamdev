import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Navigation from './layouts/navigation/Navigation'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import NotFound404 from './pages/notfound404/notfound404'
import Footer from './layouts/footer/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/404" component={NotFound404} />
          <Route path="">
            <Redirect to="/404" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
