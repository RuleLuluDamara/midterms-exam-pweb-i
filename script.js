// api url
const api_url = "https://it-its.id/api/movies";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
}
// Function to define innerHTML for HTML table
function show(data) {
  for (let x in currencies) {
    const el = document.createElement("div");
    el.classList.add("col-10", "card", "border", "shadow-lg");
    const el2 = document.createElement("div");
    el2.classList.add("card-body");
    const p = document.createElement("p");
    p.classList.add("card-title");
    p.innerText = `${x}`;
    const h5 = document.createElement("h5");
    h5.classList.add("card-text");
    h5.innerText = `${currencies[x]}`;
    el2.appendChild(p);
    el2.appendChild(h5);
    el.appendChild(el2);
    contents.appendChild(el);
  }
  console.log(movies);
}
