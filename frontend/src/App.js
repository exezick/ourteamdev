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
import OurWork from './pages/ourwork/OurWork'
import Blog from './pages/blog/Blog'
import ContactUs from './pages/contactus/ContactUs'
import AboutUs from './pages/aboutus/AboutUs'
import NotFound404 from './pages/notfound404/notfound404'
import Footer from './layouts/footer/Footer'
import ScrollToTop from './components/scrolltotop/ScrollToTop'
import ScrollContainer from '../src/animation/ScrollContainer'

function App() {
  const inertia = 50

  return (
    <Router>
      <div className="App">
        <Navigation />
        <ScrollToTop />
        <ScrollContainer scrollIntertia={inertia}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/ourwork" exact component={OurWork} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/contactus" exact component={ContactUs} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/404" component={NotFound404} />
            <Route path="">
              <Redirect to="/404" />
            </Route>
          </Switch>

          <Footer />
        </ScrollContainer>
      </div>
    </Router>
  )
}

export default App
