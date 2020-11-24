import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                
                <div class="row">
                  <div class="row2"><h1>{item.name}</h1></div>
                  <div class="column">
                  <li key={item.name}>
                  <a href={item.link} target="_blank"><i className={item.name}><img src={`${item.imgurl}`} className="item-img" /></i></a>
                  </li>
                  </div>
                  <div class="column2">
                  <h5>{item.description}</h5>
                  <br/>
                  </div>
                  </div>
                  
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}