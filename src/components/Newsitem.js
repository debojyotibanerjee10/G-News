import React, { Component } from 'react'
import "./Newsitem.css"
export default class Newsitem extends Component {
  render() {
    let {title,description,imageurl,newsurl}=this.props;
    return (
      <div className='newsitem'>
        <img src={imageurl} alt="img"/>
         <h3>{title}</h3>
         <p>{description}</p>
         <a rel="noreferrer" href={newsurl} target="_blank"><button>Read More</button></a>
      </div>
    )
  }
}
