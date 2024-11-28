import "../CSS/style.css";

async function getData() {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films");

    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      createCards(data.characters);
    }
  } catch (error) {
    console.log(error);
    alert("sorry could not find that");
  }
}

getData();

const DomSelectors = {
  container: document.querySelector(".container"),
};

function createCards(data) {
  DomSelectors.container.innerHTML = "";

  data.forEach((movie) => {
    const CardHTML = `<div class = card>
        <h1 class = "title"> Title: ${movie.name} </h1>
        <h2 class = "otitle"> Original Title: ${movie.original_title} </h2>
        <img class="image" src="${movie.image_url}">
        <p class = "producer"> Producer: ${movie.producer} </p>
        <p class = "date"> Release Date: ${movie.release_date} </p>
        <p class = "occupation"> Occupation: ${character.personal.occupation} </p>
        <p class = "desc"> Description: ${movie.description} </p>
        </div>`;
    DomSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
  });
}
