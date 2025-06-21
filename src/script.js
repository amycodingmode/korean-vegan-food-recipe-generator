function generateRecipe(event) {
  event.preventDefault();

  //let recipeElement = document.querySelector("#recipe");
  //recipeElement.innerHTML = "Korean Vegan Recipe";
  //don't need this anymore because we added Typewriter effect

  new Typewriter("#recipe", {
    strings: "Korean Vegan Recipe",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
