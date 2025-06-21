function generateRecipe(event) {
  event.preventDeault();

  alert("Generating");
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
