import React,{useEffect,useState} from 'react'
import Newsitem from "./Newsitem"
import "./News.css"
import InfiniteScroll from 'react-infinite-scroll-component'
export default function News(props){
  function capitalize(word)
  {
    return word.charAt(0).toUpperCase()+word.slice(1);
  }
  document.title=`G-NEWS:${capitalize(props.category)}`;
  const[articles,setarticles]=useState([]);
  const[page,setpage]=useState(1);
  const[totalResults,settotalResults]=useState(0);
  const updatenews= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=950e65119da64602bc6f679702b65d71&page=${page}&pageSize=${props.pageSize}`
    let data= await fetch(url);
    let parseddata=await data.json()
    setarticles(parseddata.articles);
    settotalResults(parseddata.totalResults);
  }
  useEffect(()=>{
    updatenews();
    //eslint-disable-next-line
  },[]);
  const fetchMoreData=async()=>{
    setpage(page+1);
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=950e65119da64602bc6f679702b65d71&page=${page}&pageSize=${props.pageSize}`;
    let data= await fetch(url);
    let parseddata=await data.json();
    setarticles(articles.concat(parseddata.articles))
  }
    return (
      <div className="news">
      <h2>{`G-NEWS Top ${props.category} Headlines`}</h2>
      <InfiniteScroll dataLength={articles.length}
      next={fetchMoreData} hasMore={articles.length!==totalResults} loader={<h4>Loading...</h4>}>
      <div className='newsitems'>
      {articles.map((element)=>{
        return <Newsitem key={element.url} title={element.title} description={element.description} newsurl={element.url} imageurl={element.urlToImage} date={element.publishedAt}/>
      })}
      </div>
      </InfiniteScroll>
      </div>
    )
    }


