const button = document.querySelector(".button");
const dataDiv = document.querySelector(".data");
let test = () => {
  console.log("test");
};

const getData = () => {
  fetch("https://swapi.py4e.com/api/people")
    .then((response) => response.json())
    .then((data) => {
      dataDiv.innerHTML = data.results
        .map((people) => `<li>${people.name}</li>`)
        .join("");
    })
    .catch((error) => console.error(error));
};

button.addEventListener("click", getData);
