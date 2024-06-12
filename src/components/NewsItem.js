import React, { Component } from 'react'

export class NewsItem extends Component {
   

  render() {
    let {title, description, imageUrl,newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
       <div className="card" >
       <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute', right: '0'}}>
       <span className=" badge rounded-pill bg-danger" >
       {source}
       </span>
       </div>
       <img src={!imageUrl?"https://sm.ign.com/t/ign_in/gallery/d/destiny-2-/destiny-2-the-final-shape-screenshots_5dwy.600.jpg" :imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{title}
     
      </h5>
      <p className="card-text">{description}</p>
      <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown" : author} on {new Date(date).toGMTString()}</small></p>
      <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
     </div> 
    </div>
        
      </div>
    )
  }
}

export default NewsItem
