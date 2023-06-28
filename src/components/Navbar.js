import React, { Component } from 'react'
import "./Navbar.css"
export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <ul>
          <li><a href="/">G-NEWS</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    )
  }
}
