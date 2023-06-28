import React, { Component } from 'react'
import Newsitem from "./Newsitem"
import "./News.css"
export default class news extends Component {
  articles=[]
  page=1
  totalResults=0
  constructor()
  {
    super();
    this.state={
      articles:this.articles,
      page:this.page,
      totalResults:this.totalResults,
    }
  }
   async componentDidMount(){
    let url=`https://newsapi.org/v2/everything?q=apple&from=2023-06-26&to=2023-06-26&sortBy=popularity&apiKey=950e65119da64602bc6f679702b65d71&page=1&pageSize=${this.props.pageSize}`
    let data= await fetch(url);
    let parseddata=await data.json()
    this.setState({
      articles:parseddata.articles,
      totalResults:parseddata.totalResults
    })
  }
  handlenext= async ()=>{
    if(this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize))
    {

    }
    else{
    let url=`https://newsapi.org/v2/everything?q=apple&from=2023-06-26&to=2023-06-26&sortBy=popularity&apiKey=950e65119da64602bc6f679702b65d71&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    let parseddata=await data.json();
    this.setState({
      page:this.state.page +1,
      articles:parseddata.articles
    })
  }
  }
  handleprev= async ()=>{
    let url=`https://newsapi.org/v2/everything?q=apple&from=2023-06-26&to=2023-06-26&sortBy=popularity&apiKey=950e65119da64602bc6f679702b65d71&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    let parseddata=await data.json();
    this.setState({
      page:this.state.page -1,
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
      <div className="buttons">
      <button disabled={this.state.page<=1} onClick={this.handleprev}>&larr;Previous</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}onClick={this.handlenext}>Next&rarr;</button>
      </div> 
      </div>
    )
  }
}


