import capitalizeFirstLetter from "./capitalizeFirstLetter";

export default function getUniqueValues(arr,obj) {
// Step 1: Get all values from all recipes/appliances/utensils
// Step 2: Flatten the array of arrays into one array
// Step 3: Sort alphabetically
    const listIngredients = arr.map(({ingredients}) => ingredients.map(({ingredient}) => ingredient.toLowerCase())).flat().sort()
    const listAppliance = arr.map(({appliance}) => appliance.toLowerCase()).sort()
    const listUtensils = arr.map(({ustensils}) => ustensils.map(utensil => utensil.toLowerCase())).flat().sort()
// Step 4: Get unique values from and capitalize first letter
    const uniqueValue =  [
        {
            list: [...new Set(listIngredients)],
            type: 'ingredients'
        },
        {
            list: [...new Set(listAppliance)],
            type: 'appliances'
        },
        {
            list: [...new Set(listUtensils)],
            type: 'utensils'
        }
    ]
    return Object.entries(obj).map(([filterType, filterValue]) => {
        for (const {list, type} of uniqueValue) {
            if (filterType === type) {
                return {list: list.filter(e => e.includes(filterValue.toLowerCase())), type}
            }
        }
    }).map(({list,type})=>({list:list.map(capitalizeFirstLetter),type}))
}