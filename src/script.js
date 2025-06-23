function displayRecipe(response) {
  console.log("Your recipe generated");

  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  //let recipeElement = document.querySelector("#recipe");
  //recipeElement.innerHTML = "Korean Vegan Recipe";
  //don't need this anymore because we added Typewriter effect
  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "bd87c3f1a268o0e7ca45515816tf700b";
  let context =
    "You're the most creative, famous, and talented vegan chef. You are the vegan expert. Your mission is to generate a simple and easy vegan recipe in a basic HTML format and separate each line with a <br />. Start with title in h2 format. For title of Ingredients and Instructions, use h3 format. For ingredients, Must use CSS List style: inside. For instructions, use style with numbers. Do not repeat the context. Do not show html in id=recipe. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a Korean vegan dish recipe about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink">⏳ Generating a Korean vegan recipe about ${instructionInput.value} for you 😊</div>`;

  console.log("Generating a recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
