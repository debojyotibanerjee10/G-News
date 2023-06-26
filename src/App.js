import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import News from "./components/News"
import{
  BrowserRouter as Router,
  Routes,
  // Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
         <Router>
          <Navbar/>
          <News/>
          <Routes>
          </Routes>
         </Router>
      </div>
    )
  }
}

