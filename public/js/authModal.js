/*
 * Couldn't get React and JQuery to work together,
 * so Modal functionality had to be out here
 */

/* Functions for getting and retrieving from localStorage */
const setLocal = (key, value) => {
  const serializedValue = JSON.stringify(value);
  localStorage.setItem(key, serializedValue);
};

const getLocal = (key) => {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
};

window.addEventListener("DOMContentLoaded", () => {
  const token = getLocal("superheroToken");
  if (
    !token ||
    (token.email !== "challenge.alkemy.org" && token.password !== "react")
  ) {
    $("#authModal").modal("show");
  }
});

/* When user clicks the Submit button */
const authSubmitHandler = () => {
  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;
  const invalidCredentials = document.getElementById("invalid-credentials");
  console.log("User email: " + userEmail);
  console.log("User password: " + userPassword);

  if (userEmail === "challenge@alkemy.org" && userPassword === "react") {
    setLocal("superheroToken", { email: userEmail, password: userPassword });
    $("#authModal").modal("hide");
  } else if (userEmail !== "challenge@alkemy.org" || userPassword !== "react") {
    invalidCredentials.classList.add("visible");
  }
};
