import "../CSS/style.css";

async function getData() {
  try {
    const response = await fetch(
      "https://dattebayo-api.onrender.com/characters"
    );

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

  data.forEach((character) => {
    const CardHTML = `<div class = card>
        <h1 class = "name"> Character: ${character.name} </h1>
        <h2 class = "clan"> Clan: ${character.personal.clan} </h2>
        <img class="image" src="${character.image_url}">
        <h2 class = "tailedBeasts"> Beasts: ${character.personal.tailedBeast} </h2>
        <p class = "kekkeiGenkai"> KekkiGenkai: ${character.personal.kekkeiGenkai} </p>
        <p class = "class"> Class: ${character.personal.classification} </p>
        <p class = "occupation"> Occupation: ${character.personal.occupation} </p>
        <p tools = "tools"> Tools: ${character.tools} </p>
        </div>`;
    DomSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
  });
}
