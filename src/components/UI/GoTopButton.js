import React from "react";
import "./GoTopButton.css";

/* Stack Overflow: code for detecting scrolling on Y axis */
window.addEventListener("scroll", () => {
  const goTopButton = document.querySelector("#go-top-button");

  goTopButton.classList.toggle("visible", window.scrollY > 420);
});

function GoTopButton() {
  return (
    <div>
      <a href="#" id="go-top-button">
        <i class="fas fa-arrow-up"></i>
      </a>
    </div>
  );
}

export default GoTopButton;
