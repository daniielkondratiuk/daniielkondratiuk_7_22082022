// Function to display recipes, take array of recipes and return html string
export default function getRecipesTemplate(recipes) {
    //Generate HTML template with all recipes, use map to loop through array of recipes
    return recipes.map(recipe => {
        // Take each recipe and return a template
        const {name, description, time, ingredients} = recipe
        // Ingredients is an array of objects, so we need to loop through it and get the name and quantity and unit
        // Take each ingredient and return a template
        const listIngredients = ingredients.map(({ingredient, quantity, unit}) => `
        <li class="ingredients__item"><b>${ingredient}: </b>${quantity ? quantity : ''}${unit ? unit : ''}</li>
        `).join('')
        return `
        <div class="recipe">
            <img class="recipe__img" src="https://picsum.photos/380/178" alt="recipe">
            <div class="recipe__wrap">
                <div class="recipe__header">
                    <h2 class="recipe__title">${name}</h2>
                    <div class="recipe__duration">
                        <img src="/Clock.ebf82c45.svg" alt="icon duration">
                        ${time} min
                    </div>
                </div>
                <div class="recipe__content">
                    <ul class="recipe__ingredients ingredients list-group">
                        ${listIngredients}
                    </ul>
                    <p class="recipe__description">
                        ${description}
                    </p>
                </div>
            </div>
        </div>
  `}).join('')
}