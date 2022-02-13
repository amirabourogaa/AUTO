import React, { useEffect } from 'react'
import { gsap } from "gsap";
import Navv from '../../components/Navv';
import "./liquide.css"
export default function Liquide() {
    useEffect(()=>{
      
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
        
        gsap.utils.toArray(".parallax").forEach(layer => {
            const depth = layer.dataset.depth;
            const movement = -(layer.offsetHeight * depth)
            tl.to(layer, {y: movement, ease: "none"}, 0)
        });
          
    })
  return (
    <div >
        <Navv/>
        <div id='hero'>
  <div class='layer-bg layer parallax' data-depth='0.10'></div>
  <div class='layer-1 layer parallax' data-depth='0.20'></div>
  <div class='layer-2 layer parallax' data-depth='0.50'></div>
  <div class='layer-3 layer parallax' data-depth='0.80'></div>
  <div class='layer-overlay layer parallax' data-depth='0.85'></div>
  <div class='layer-4 layer parallax' data-depth='1.00'></div>
</div>

<div id='content'>
  <div class='container'>
    <section class='first-section'>
      <div class='row'>
        <div class='col-sm-6'>
          <h1>You cannot hide the soul. Through all his unearthly tattooings, I thought I saw the traces of a simple honest heart.</h1>
        </div>
      </div>
      <div class='row'>
        <div class='col-sm-6'>
          <p>And besides all this, there was a certain lofty bearing about the Pagan, which even his uncouthness could not altogether maim. He looked like a man who had never cringed and never had had a creditor. Whether it was, too, that his head being shaved, his forehead was drawn out in freer and brighter relief, and looked more expansive than it otherwise would, this I will not venture to decide; but certain it was his head was phrenologically an excellent one.</p>
          <p>It may seem ridiculous, but it reminded me of General Washington's head, as seen in the popular busts of him. It had the same long regularly graded retreating slope from above the brows, which were likewise very projecting, like two long promontories thickly wooded on top. Queequeg was George Washington cannibalistically developed.</p>
          <p>Whilst I was thus closely scanning him, half-pretending meanwhile to be looking out at the storm from the casement, he never heeded my presence, never troubled himself with so much as a single glance; but appeared wholly occupied with counting the pages of the marvellous book. Considering how sociably we had been sleeping together the night previous, and especially considering the affectionate arm I had found thrown over me upon waking in the morning, I thought this indifference of his very strange. But savages are strange beings; at times you do not know exactly how to take them.</p>
        </div>
        
      </div>
    </section>
  </div>
</div>





    </div>
  )
}
