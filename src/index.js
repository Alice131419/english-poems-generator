function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursos: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3be4c0t6ebabc0db7oebb0b39afcd366";
  let context =
    "You are a romantic Poem expert and love to write short poems. You`re mission is to generate a 4 line poem in basic HTML, NO mention HTML. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate an Italian poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">Generating an Italian poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
