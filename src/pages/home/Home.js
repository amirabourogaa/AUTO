import React from 'react';
import Navv from '../../components/Navv';
import Promo from '../../components/Promo';
import Footer from "../../components/footer/Footer"
import "./home.css"
import Products from '../../components/Products/Products';
import Slider from '../../components/slider/Slider';

export default function Home() {
  return <div>
<Navv/>

<Promo/>
<Slider/>
<div className="title_lines"><span style = {{color: "red"}}>Découvrir</span> notre gamme</div>
<Products/>
<Footer/>
  </div>;
}
