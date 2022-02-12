import React, { Component } from 'react';
import './battriesComp.css'

export default class BattriesComp extends Component {
constructor (props){
  // super(props)
}
  render() {
    return <div id="battriescontainer">
<div id="container">


  <div id="card">
    <div class="imgBx">
      <img src="https://images.unsplash.com/photo-1506880135364-e28660dc35fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt=""/>
    </div>
    <div id="details">
      <div class="content">
        <h2>{this.props.titre}<br/>
          <span>Founder of LoremIpsum</span>
        </h2>
        <ul>
          <li><a href="/">FB</a></li>
          <li><a href="/">TW</a></li>
          <li><a href="/">YT</a></li>
          <li><a href="/">IN</a></li>
        </ul>
        <a href="/">Read More</a>
      </div>
    </div>
  </div>
</div>
    </div>;
  }
}
