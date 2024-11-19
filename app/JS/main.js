import "../CSS/style.css";

async function getData() {
  try {
    const response = await fetch("https://mhw-db.com/monsters/16");

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
