import React, { useRef } from "react";
import "./GoTopButton.css";

function GoTopButton() {
  const buttonRef = useRef();

  /* Stack Overflow: code for detecting scrolling on Y axis */
  window.addEventListener("scroll", () => {
    const goTopButton = buttonRef.current;

    goTopButton.classList.toggle("visible", window.scrollY > 420);
  });

  return (
    <div>
      <a href="#" id="go-top-button" ref={buttonRef}>
        <i class="fas fa-arrow-up"></i>
      </a>
    </div>
  );
}

export default GoTopButton;
