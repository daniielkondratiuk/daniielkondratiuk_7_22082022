import capitalizeFirstLetter from "./capitalizeFirstLetter";

export default function getUniqueValues(arr) {
// Step 1: Get all values from all recipes/appliances/utensils
// Step 2: Flatten the array of arrays into one array
// Step 3: Sort alphabetically
    const listIngredients = arr.map(({ingredients}) => ingredients.map(({ingredient}) => ingredient.toLowerCase())).flat().sort()
    const listAppliance = arr.map(({appliance}) => appliance.toLowerCase()).sort()
    const listUtensils = arr.map(({ustensils}) => ustensils.map(utensil => utensil.toLowerCase())).flat().sort()
// Step 4: Get unique values from and capitalize first letter
    return [
        {
            list: [...new Set(listIngredients)].map(capitalizeFirstLetter),
            type: 'ingredients'
        },
        {
            list: [...new Set(listAppliance)].map(capitalizeFirstLetter),
            type: 'appliances'
        },
        {
            list: [...new Set(listUtensils)].map(capitalizeFirstLetter),
            type: 'utensils'
        }
    ]
}