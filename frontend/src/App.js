import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Navigation from './layouts/navigation/Navigation'
import Home from './pages/home/Home'
import NotFound404 from './pages/notfound404/notfound404'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/404" component={NotFound404} />
          <Route path="">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
