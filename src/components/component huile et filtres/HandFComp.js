import React from 'react';
import "./HandFComp.css"

export default function HandFComp(props) {
  return <div>
      <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.titre}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><strong className="text-muted">{props.children}</strong></p>
      </div>
    </div>
  </div>
</div>
  </div>;
}
