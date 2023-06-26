import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Newsitem.css"

export default class Newsitem extends Component {
  render() {
    let {title,description,imageurl}=this.props;
    return (
      <div className='newsitem'>
        <img src={imageurl} alt="image"/>
         <h3>{title}</h3>
         <p>{description}</p>
         <Link to="/newsdetail"><button>Read More</button></Link>
      </div>
    )
  }
}
