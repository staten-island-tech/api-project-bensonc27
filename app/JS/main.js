import "../CSS/style.css";

const DomSelectors = {
  container: document.querySelector(".container"),
  search: document.getElementById("search"),
  button: document.getElementById("button"),
};

async function getData() {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films");

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

async function filtData() {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films");

    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      filterNames(data);
    }
  } catch (error) {
    console.log(error);
    alert("sorry could not find that");
  }
}

filtData();

function filterNames(movies) {
  DomSelectors.button.addEventListener("click", function (event) {
    event.preventDefault();
    const searchvalue = DomSelectors.search.value;

    if (searchvalue) {
      const name = movies.filter((movie) => movie.title == searchvalue);
      console.log(name);
      if (name.length === 0) {
        return console.log("There is nothing for this value.");
      }
      createCards(name);
      reset();
    } else {
      console.log("There was no search input.");
    }
  });
}

function reset() {
  DomSelectors.search.value = "";
}

function createCards(data) {
  DomSelectors.container.innerHTML = "";

  data.forEach((movie) => {
    const CardHTML = `
  <div class="card mb-14 bg-amber-100 sm:w-10/12 md:w-7/12 lg:w-5/12 xl:w-3/12 items-center shadow-xl mt-4 ml-8">
  <figure>
    <img class= "image "
      src="${movie.image}" alt="${movie.title} Picture"
      >
  </figure>
  <div class="card-body">
    <h1 class="card-title "> Title: ${movie.title}</h1>
    <h2 class="otitle "> Original Title: ${movie.original_title} </h2>
    <h3 class="date "> Release Date: ${movie.release_date} </h3>
        <h3 class="producer "> Producer: ${movie.producer} </h3>
    <p class="desc text-xs"> Description: ${movie.description} </p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Watch Now</button>
    </div>
  </div></div>
     
`;
    DomSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
  });
}
