import React from 'react'
import './App.css';
import Navbar from './component/layout/navbar'
import Cards  from './component/layout/Cards'
import Login from './component/auth/login';
import Register from './component/auth/register'
import Landing from './component/layout/landing'
import Safety from './component/layout/Safety'
import Footer from './component/layout/footer'
import Promise from './component/layout/promise'
import Award from './component/layout/Award'
import Global from './component/layout/Global'
import Growing from './component/layout/Growing'
import ticket from './component/Tickets/ticket'



import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      
      <Route exact path="/" component={Landing}/>
      <Route exact path="/ticket" component={ticket}/> 
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/" component={Cards}/>
      <Route exact path="/" component={Safety}/>
      <Route exact path="/" component={Promise}/>
      <Route exact path="/" component={Award}/>      
      <Route exact path="/" component={Global}/>      
      <Route exact path="/" component={Growing}/>  

      <Route exact path="/" component={Footer}/>  
      </Router>
      
    </div>
  );
}

export default App;
