import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './component/navbar';
import Home from './component/home';
import Register from './component/register'
import Edit from './component/edit'
import Details  from './component/details';
import {NavLink, Switch, Route } from "react-router-dom"

function App() {
  return (
  <>
  <Navbar />
  <Switch>
        <Route exact path= "/" component={Home }/>
        <Route  path= "/register" component={Register }/>
        <Route  path= "/edit/:id" component={Edit}/>
        <Route  path= "/details/:id" component={Details}/>
  </Switch> 
    </>
  );
}

export default App;
