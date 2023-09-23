import React from "react"
/* import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"; */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../common/Header"
import { Home } from "../home/Home"
import { About } from "./About"
import { Services } from "./Services"
import { Portfolio } from "./Portfolio"
import { Testimonials } from "./Testimonials"
import { Blog } from "./Blog"
import { Contact } from "./Contact"
import { Footer } from "./Footer"



/* export const Pages = () => {
  return <>Pages</>
}
 */


export const  Pages = () => {
  return (
  <> 
    <Router> 
      <Header />
      <Switch>
          {/*<Route path='/ '>
          <About />
        </Route>*/}
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/testimonials' component={Testimonials} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/Footer' component={Footer} />
      </Switch>
      <Footer />
    </Router>
  </>
  )
} 

export default Pages;