import React, { useEffect } from "react";
import Navv from "../../components/Navv";
import HandFComp from "../../components/component huile et filtres/HandFComp";

import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";


import FilterBox from "../../components/filter box/FilterBox";
import Footer from "../../components/footer/Footer";
export default function Huiles(props) {
  useEffect(()=>{
    var searchinput=document.querySelector('#search') 
    searchinput.addEventListener("keyup",function(event){
        var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = event.target.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    })
    })
  return (
  
    <div>
      <Navv />
      <div class="row">
    <div class="col-4"><FilterBox/></div>
    <div class="col-8">

    <ul id="myUL">
  <li>
      <a style = {{display: "none"}} href="#">TOTAL</a>
      <HandFComp img = {img4} titre = "TOTAL"/>
      </li>
  <li>
      <a style = {{display: "none"}} href="#">SHELL</a>
      <HandFComp img = {img5} titre= "SHELL"/>
  </li>

  <li><a style = {{display: "none"}} href="#">ELF</a>
  <HandFComp img = {img6} titre = "ELF"/>
  </li>
 
</ul>
    </div>
  </div>
 <Footer/>
     
    </div>
  );
}
