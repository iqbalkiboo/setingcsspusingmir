import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Homepage from "./Components/View/Homepage"
import Recommendation from "./Components/View/Recommendation"
// import Signin from "./Components/View/Signin"
// import Register from "./Components/View/Register"
// import { Header, Homepage, Footer } from "../src/Components"
// import Content from "../src/Components/View"
import Header from "../src/Components/Part/Header"
import Footer from "../src/Components/Part/Footer"

import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import { func } from 'prop-types';

// function Homepage() {
//   return (
//     <div>
//       <h2>Homepage</h2>
//       <h2>Homepage</h2>
//       <h2>Homepage</h2>
//       <h2>Homepage</h2>
      
//     </div>
//   );
// }

// function Recommendation() {
//   return (
//     <div>
//       <h2>Recommendation</h2>
//     </div>
//   );
// }

// function Signin({ match }) {
//   return <h3>Requested Param: {match.params.id}</h3>;
// }

// function Register({ match }){
//   return <h2>Requested param: {match.params.id}</h2>
// }

function App() {
  return (
    <Router>
      
      <Header />

      <Route exact path="/" component={Homepage} />
      <Route exact path="/Recommendation" component={Recommendation} />
      {/* <Route path="/Register" component={Register} />
      <Route path="/Signin" component={Signin} /> */}

      <Footer />
    </Router>
    
  );
}


export default App;

/* 
      <nav>
        <li>
          <Link to="/HomePage"></Link>
        </li>
        <li>
          <Link to="/Recommendation"></Link>
        </li>
        <li>
          <Link to="/Register"></Link>
        </li>
        <li>
          <Link to="/Signin"></Link>
        </li>
      </nav> */


// <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/Homepage/">Homepage</Link>
    //         </li>
    //         <li>
    //           <Link to="/Recommendation/">Recommendation</Link>
    //         </li>
    //         <li>
    //           <Link to="/Signin/">Signin</Link>
    //         </li>
    //         <li>
    //           <Link to="/Register/">Register</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Router path="/" exact component={Homepage}/>
    //     <Router path="/Recomendation/" component={Recommendation}/>
    //     <Router path="/Signin/" component={Signin}/>
    //     <Router path="/Register/" component={Register}/>
    //   </div>
    // </Router>
    
    // <div>
    //   <Header />

    //   <Content />
    //     <Homepage />

    //   <Footer />
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>