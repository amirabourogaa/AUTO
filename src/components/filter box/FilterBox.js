import React, { useEffect } from 'react';
import "./filterBox.css"
import $  from "jquery"

export default function FilterBox() {
  useEffect (()=>{
    $(function() {
      var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
    
        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
      }
    
      Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
          var $this = $(this),
           $next = $this.next();
    
        $next.slideToggle();
        $this.parent().toggleClass('open');
    
        if (!e.data.multiple) {
          $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
      }	
    
      var accordion = new Accordion($('#accordion'), false);
    });
    
  })
  return <div>
<ul id="accordion" className="accordion">
  <li>
    <div className="link"><i className="fa fa-database"></i>Huiles et filtres<i className="fa fa-chevron-down"></i></div>
    <ul className="submenu">
      <li><a id='shell' href="#">shell</a></li>
      <li><a href="/">total</a></li>
      <li><a href="/">elf</a></li>
    </ul>
  </li>
  <li>
    <div className="link"><i className="fa fa-code"></i>Coding<i className="fa fa-chevron-down"></i></div>
    <ul className="submenu">
      <li><a href="/">Javascript</a></li>
      <li><a href="/">jQuery</a></li>
      <li><a href="/">Ruby</a></li>
    </ul>
  </li>
  <li>
    <div className="link"><i className="fa fa-mobile"></i>Devices<i className="fa fa-chevron-down"></i></div>
    <ul className="submenu">
      <li><a href="/">Tablet</a></li>
      <li><a href="/">Mobile</a></li>
      <li><a href="/">Desktop</a></li>
    </ul>
  </li>
  <li>
    <div className="link"><i className="fa fa-globe"></i>Global<i className="fa fa-chevron-down"></i></div>
    <ul className="submenu">
      <li><a href="/">Google</a></li>
      <li><a href="/">Bing</a></li>
      <li><a href="/">Yahoo</a></li>
    </ul>
  </li>
</ul>


  </div>;
}
