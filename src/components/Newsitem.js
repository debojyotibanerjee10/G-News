import React from 'react'
import "./Newsitem.css"
export default function Newsitem(props){
    return (
      <div className='newsitem'>
        <img src={props.imageurl} alt="img"/>
         <h3>{props.title}</h3>
         <p>{props.description}</p>
         <p>Date:{props.date}</p>
         <a rel="noreferrer" href={props.newsurl} target="_blank"><button>Read More</button></a>
      </div>
    )
}
