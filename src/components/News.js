import React, { Component } from 'react'
import Newsitem from "./Newsitem"
import "./News.css"
export default class news extends Component {
  articles=[]
  constructor()
  {
    super();
    this.state={
      articles:this.articles
    }
  }
   async componentDidMount(){
    let url="https://newsapi.org/v2/everything?q=apple&from=2023-06-26&to=2023-06-26&sortBy=popularity&apiKey=950e65119da64602bc6f679702b65d71"
    let data= await fetch(url);
    let parseddata=await data.json()
    this.setState({
      articles:parseddata.articles
    })
  }
  render() {
    return (
      <div className="news">
      <h2>G-NEWS Top Headlines</h2>
      <div className='newsitems'>
      {this.state.articles.map((element)=>{
      return <Newsitem key={element.url} title={element.title} description={element.description} newsurl={element.url} imageurl={element.urlToImage}/>
      })}
      </div>
      </div>
    )
  }
}


