import React, { Component } from 'react'

export class Newsitem extends Component {
 

  render() {
    let {title,description,imageurl,newsurl,author,date,source} = this.props;
    return (
      <div className='my-3'>     
      <div className="card" >
      <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>
              {source} 
            </span>
          <img src={!imageurl?"https://image.shutterstock.com/image-vector/default-word-digital-style-glowing-260nw-1668796114.jpg":imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small >By {author? author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
</div>
      </div>
    )
  }
}

export default Newsitem