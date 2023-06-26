import React, { Component } from 'react'
import Newsitem from "./Newsitem"
import "./News.css"
export default class news extends Component {
  render() {
    return (
      <div className='news'>
        <h2>Todays News-Top Headlines</h2>
        <div className="newsitems">
        <Newsitem title="title" description="desc"/>
        <Newsitem title="title" description="desc"/>
        <Newsitem title="title" description="desc"/>
        </div>
      </div>
    )
  }
}

