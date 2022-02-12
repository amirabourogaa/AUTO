import React from 'react';
import "./Products.css"
export default function Products() {
  return <div>
      {/* <div className="container">
  <div className="row">
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
  </div>
</div> */}

<div className="main">
  <ul className="cards">
    <li className="cards_item">
      <div id= "piéces" className="card">
        <div className="card_image"><img alt='' src="https://picsum.photos/500/300/?image=10"/></div>
        <div className="card_content">
          <h2 className="card_title">Piéces</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button id = "btn" className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img alt='' src="https://picsum.photos/500/300/?image=5"/></div>
        <div className="card_content">
          <h2 className="card_title">Card Grid Layout</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button id='btn' className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img alt='' src="https://picsum.photos/500/300/?image=11"/></div>
        <div className="card_content">
          <h2 className="card_title">Card Grid Layout</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button id='btn' className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img alt='' src="https://picsum.photos/500/300/?image=14"/></div>
        <div className="card_content">
          <h2 className="card_title">Card Grid Layout</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button id='btn' className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img alt='' src="https://picsum.photos/500/300/?image=17"/></div>
        <div className="card_content">
          <h2 className="card_title">Card Grid Layout</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button id = "btn" className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img alt='' src="https://picsum.photos/500/300/?image=2"/></div>
        <div className="card_content">
          <h2 className="card_title">Card Grid Layout</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button id="btn" className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
  </ul>
</div>

  </div>;
}
