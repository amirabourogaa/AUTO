import React, { useEffect } from "react";
import "./arrowTop.css";
import $ from "jquery";
export default function ArrowTop() {
  useEffect(() => {
    // ===== Scroll to Top ====
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 50) {
        // If page is scrolled more than 50px
        $("#return-to-top").fadeIn(200); // Fade in the arrow
      } else {
        $("#return-to-top").fadeOut(200); // Else fade out the arrow
      }
    });
    $("#return-to-top").click(function () {
      // When arrow is clicked
      $("body,html").animate(
        {
          scrollTop: 0, // Scroll to top of body
        },
        500
      );
    });
  });
  return (
    <div>
      <a href="/" id="return-to-top">
        <i className="icon-chevron-up"></i>
      </a>

    
    </div>
  );
}
