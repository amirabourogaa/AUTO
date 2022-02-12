import React, { useEffect } from 'react';
import Navv from "../../components/Navv"
import "./batterie.css"
import BattriesComp from '../../components/card batteries/BattriesComp';
import FilterBox from '../../components/filter box/FilterBox';
import Footer from '../../components/footer/Footer';
export default function Batterie(props) {
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
  return <div>
<Navv/>
<h1>{props.titre}: de la part de app (Parent)</h1>

    <div className='row'>
        <div className='col-4'>
<FilterBox/>
        </div>
<div className='col-8'>
<ul  id="myUL">
  <li>
      <a style = {{display: "none"}} href="#">ASSAD</a>
      <BattriesComp titre = "ASSAD"/>
      </li>
  <li>
      <a style = {{display: "none"}} href="#">VARTA</a>
      <BattriesComp titre= "VARTA"/>
  </li>

  <li><a style = {{display: "none"}} href="#">BOSCH</a>
  <BattriesComp titre = "BOSCH"/>
  </li>
 
</ul>
</div>
    </div>


 <Footer/>
  
  </div>;
}
