import "./style.css";

async function getData() {
  //fetch returns a promise
  try {
    const response = await fetch("https://api.clashroyale.com/v1/pekka");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.querySelector("h1").textContent = data.name;
    }
  } catch (error) {
    console.log(error);
    alert("sorry could not find that ");
  }
}
getData();
