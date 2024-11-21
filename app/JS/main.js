import "../CSS/style.css";

async function getData() {
  try {
    const response = await fetch("https://mhw-db.com/monsters");

    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      createCards(data);
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

  data.forEach((monster) => {
    const CardHTML = `<div class = card>
        <h1 class = "name"> Monster: ${monster.name} </h1>
        <img class = "picture" src="${monster.image_url}">
        <h2 class = "species"> Species: ${monster.species} </h2>
        <h2 class = "type"> Type: ${monster.type} </h2>
        <h2 class = "elements"> Elements: ${monster.elements} </h2>
        <p class = "resistances"> Resistance: ${monster.resistances} </p>
        <p class = "weakness"> Weakness: ${monster.weaknesses} </p>
        <p class = "location"> Locations: ${monster.locations} </p>
        <p class = "disease"> Ailments: ${monster.ailments} </p>
        <p class = "reward"> Drops: ${monster.rewards} </p>
        <p class = "desc"> ${monster.description} </p>
        </div>`;
    DomSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
  });
}
