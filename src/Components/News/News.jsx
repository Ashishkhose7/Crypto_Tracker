'use client'
import React, { useEffect, useState } from "react"
import { CardActionArea } from '@mui/material';
import { Skeleton } from 'antd';
import { imageData, newsSearch } from "@/src/actions";

const News = () => {

    const [userText, setUserText] = useState('');
    const [news, setNews] = useState([]);
    const [topn, setTopn] = useState([]);
    const [imgurls, setImgUrls] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
      getCryptoNews();
    }, [])
    
    const getCryptoNews = async (uservalue='bitcoin')=>{
        
          setNews([]);
          setTopn([]);
          setIsLoading(true);

          const { newsdata } = await newsSearch(uservalue);
          const {imagestats} = await imageData();
          const imgdata = [];
          if(imagestats){
            for (const key in imagestats.photos) {
              imgdata.push(imagestats.photos[key].src.medium);
            }
            setImgUrls(imgdata);
          }

          if(newsdata instanceof Array){

            const breakpoint = Math.floor((newsdata.length)/2);
            const data1 = newsdata.slice(0,breakpoint);
            const data2 = newsdata.slice(breakpoint);
            setNews(data1);
            setTopn(data2);
            setIsLoading(false);

          }else{

            setNews([]);
            setTopn([]);
            setIsLoading(false);

          }
      setUserText('');

    }
    const renderNews = () => {
      if(!isloading){
        if(news.length>0){
          return (
            <>
              <div className="col-md-9 news-card-container p-3">
                  {
                  news[0] ?  news.map((newss, index)=>{
                    if(index>25){
                      return ''
                    }else{
                      return(
                        <a key={index} href={newss?.url} target="_blank" rel="noreferrer" className="text-decoration-none mb-3">
                          <div className="maincard">
                            <CardActionArea >
                              <img src={imgurls[index]} alt="img" className="img-fluid" height="110"/>
                              <div className="p-2">
                                <p className="newssource text-primary">{newss?.source}</p><br />
                                <p className="newscontent">{newss?.title.length > 60 ? `${newss?.title.substring(0, 60)}...` : newss?.title}</p>
                              </div>
                            </CardActionArea>
                          </div>
                        </a>
                      )
                    }
                    }) : <Skeleton active  className="mx-3"/>
                  }

              </div>
              <div className="col-md-3 p-0 pt-3 topnews-sec">
                    {
                      topn[0] ? <div className="card m-auto">
                      <div className="card-header text-light bg-primary">Top News</div>
                      <ul class="list-group border-0">
                        {
                        topn[5] ? topn.map((top, index)=>{
                          if(index>25){
                            return ''
                          }else{
                            return(
                              <a key={index} href={top?.url} target="_blank" rel="noreferrer" className="text-decoration-none">
                                <li class="list-group-item border-0 border-bottom">{top?.title}</li>
                              </a>
                            )
                          }
                          }) : ''
                        }
                      </ul>
                    </div> : <Skeleton active  className="mx-3"/>
                    
                    }
              </div>
            </>
          )
        }else{
          return(
            <p className="text-center">No result found</p>
          )
        }
    }else{
      return(
      <div className="col-md-12">
        <Skeleton active  className="mx-3"/>
        <Skeleton active  className="mx-3"/>
      </div>
      )
    }
    }

  return (
    <div className="col-md-12 p-3 news-section">
        <div className="col-md-5 inputcontainer m-auto mt-4 ">
          <input type="email" placeholder="Enter cryptocurrency name eg: bitcoin" className="email-input" value={userText} onChange={(e)=>setUserText(e.target.value)}/>
          <button className="btn subscribe-btn bg-primary text-light" onClick={()=>getCryptoNews(userText)}>Search</button>
        </div>
        <div className="row mt-5">
             { renderNews() }
        </div>
    </div>
  )
};

export default News;
