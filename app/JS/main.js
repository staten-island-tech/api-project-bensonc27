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
      console.log(data.data);
      createCards(data.data);
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
        <img class = "picture" src="${character.image_url}">
        <h2 class = "clan"> Clan: ${character.clan} </h2>
        <h2 class = "tailedBeasts"> Beasts: ${character.tailedBeast} </h2>
        <h2 class = "nature"> Nature: ${character.nature} </h2>
        <p class = "kekkeiGenkai"> KekkiGenkai: ${character.kekkeiGenkai} </p>
        <p class = "class"> Class: ${character.classification} </p>
        <p class = "occupation"> Occupation: ${character.occupation} </p>
        <p tools = "tools"> Tools: ${character.tools} </p>
        </div>`;
    DomSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
  });
}
