import "../CSS/style.css";

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

const DomSelectors = {
  container: document.querySelector(".container"),
};

function createCards(data) {
  DomSelectors.container.innerHTML = "";

  data.forEach((movie) => {
    const CardHTML = `
  <div class="card bg-base-100 w-4/12 h-5/12 shadow-xl mr-20 mt-8">
  <figure>
    <img class= "image "
      src="${movie.image}"
      >
  </figure>
  <div class="card-body">
    <h2 class="card-title "> Title: ${movie.title}</h2>
    <h2 class="otitle "> Original Title: ${movie.original_title} </h2>
    <h3 class="date "> Release Date: ${movie.release_date} </h3>
        <p class="producer "> Producer: ${movie.producer} </p>
    <p class="desc "> Description: ${movie.description} </p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Watch Now</button>
    </div>
  </div></div>
     
`;
    DomSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
  });
}
