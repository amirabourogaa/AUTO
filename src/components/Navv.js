import React from 'react';

export default function Navv() {
  return <div >
  <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"#041562"}}>
  <a className="navbar-brand" href="/">Avenir Auto</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#piéces">Piéces <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/huile">Huiles et filtres</a>
      </li>
     
      <li className="nav-item">
        <a className="nav-link" href="/batterie">Batteries</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/accessoires">Accessoires</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/liquide">Liquides</a>
      </li>
      
    </ul>
    <form className="form-inline  my-2 my-lg-0" >
      <input id='search' className="form-control mr-sm-2" type="search" placeholder="Search"/>
      <button className="btn btn-danger my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  </div>;
}
