import "../CSS/style.css";

async function getData() {
  try {
    const response = await fetch("/api/digimon/name/agumon");

    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.querySelector("h1").textContent = data.name;
    }
  } catch (error) {
    console.log(error);
    alert("sorry could not find that");
  }
}
getData();
