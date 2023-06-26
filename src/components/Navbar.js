import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <ul>
          <li><Link to="/">G-NEWS</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    )
  }
}
