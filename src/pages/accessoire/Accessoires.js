import React, { useEffect, useRef } from 'react'
import Navv from '../../components/Navv'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./accessoire.css"
import Footer from '../../components/footer/Footer';



export default function Accessoires(props) {
  const ref = useRef(null);
  useEffect(()=>{
    const delSections = document.querySelectorAll(".delayed-section");

delSections.forEach(section => {
  const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
    y: "100vh",
    ease: "none"
  });
  
  const imageAnim = gsap.to(section.querySelector("img"), {
    y: "-100vh",
    ease: "none",
    paused: true
  });
  
  const scrub = gsap.to(imageAnim, {
    progress: 1,
    paused: true,
    ease: "power3",
    duration: parseFloat(section.dataset.scrub) || 0.1,
    overwrite: true
  });
  
  ScrollTrigger.create({
    animation: containerAnim,
    scrub: true,
    trigger: section,
    start: "top bottom",
    end: "bottom top",
    onUpdate: self => {
      scrub.vars.progress = self.progress;
      scrub.invalidate().restart();
    }
  });
});

  })
  return (
    <div ref={ref}>
      <Navv/>
 <div id='accessoires'>
   
    <div id="del1" className="delayed-section" data-scrub="0.4">
      <div className="innerContainer">
        <img width="575" src="https://picsum.photos/575/745?index=1" alt=""/>
      </div>
    </div>  
    <div id="del2" className="delayed-section" data-scrub="0.2">
      <div className="innerContainer">
        <img width="575" src="https://picsum.photos/575/745?index=2" alt=""/>
      </div>
    </div>
    <div id="del3" className="delayed-section" data-scrub="0.6">
      <div className="innerContainer">
        <img width="575" src="https://picsum.photos/575/745?index=3" alt=""/>
      </div>
    </div>

    </div>
<Footer/>
    </div>
  )
}

