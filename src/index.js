import recipes from "./data/recipes.js";
import getRecipesTemplate from "./view/getRecipesTemplate.js";
import getBadgesTemplate from "./view/getBadgesTemplate";
import getFilterListTemplate from "./view/getFilterListTemplate";
import capitalizeFirstLetter from "./utils/capitalizeFirstLetter";

const DOMRecipes = document.querySelector('#recipes')
const DOMFilterIngredients = document.querySelector('#filter__ingredients')
const DOMFilterAppliance = document.querySelector('#filter__appliances')
const DOMFilterUtensils = document.querySelector('#filter__utensils')
const DOMBadges = document.querySelector('#badges')
let badges = []
let searchValue = ''

render(recipes)

function render(recipesList, badgesList = []) {
    const uniqueValue = getUniqueValues(recipesList)
    DOMRecipes.innerHTML = getRecipesTemplate(recipesList)
    uniqueValue.forEach(el => {
        if (el.type === 'ingredients') DOMFilterIngredients.innerHTML = getFilterListTemplate(el)
        else if (el.type === 'appliance') DOMFilterAppliance.innerHTML = getFilterListTemplate(el)
        else if (el.type === 'utensils') DOMFilterUtensils.innerHTML = getFilterListTemplate(el)
    })
    if (badgesList) {
        DOMBadges.innerHTML = getBadgesTemplate(badgesList)
        addActiveClass(badgesList)
    }
}


document.addEventListener('click', ({target}) => {
    const badgeCloseBtn = target.closest('.badge')
    const filterOption = target.closest('.filter__option')
    //Open or close filter lists
    if (target.classList.contains('filter__arrow')) {
        toggleFilterLists(target)
    }
    if (filterOption) {
        const badgeExist = badges.some(({name}) => name === target.innerText)
        if (!badgeExist) {
            badges.push({type: target.dataset.type, name: target.innerText})
        } else {
            badges = badges.filter(({name}) => name !== target.innerText)
        }
        search(badges)
    }
    if (badgeCloseBtn) {
        badges = badges.filter(({name}) => name !== badgeCloseBtn.dataset.id)
        search(badges)
    }

})

const search = (badgesList) => {
    const filteredRecipesBySearch = recipes.filter(recipe => JSON.stringify(recipe).toLowerCase().includes(searchValue))
    const arr = filteredRecipesBySearch.length ? filteredRecipesBySearch : []
    // Filter recipes by badges
    const filterRecipes = arr.filter(({ingredients, appliance, ustensils}) => {
        // If badgesList is empty, return all recipes
        if (!badgesList.length) {
            return true
        }
        // If any of the badges match any of the recipes, return true
        return badgesList.every(({name, type}) => {
            if (type === 'ingredients') {
                return ingredients.some(({ingredient}) => ingredient.toLowerCase() === name.toLowerCase())
            } else if (type === 'appliance') {
                return appliance.toLowerCase() === name.toLowerCase()
            } else if (type === 'utensils') {
                return ustensils.some((utensil) => utensil.toLowerCase() === name.toLowerCase())
            }
        })
    })
    render(filterRecipes, badgesList)
}

function toggleFilterLists(btn) {
    const filters = document.querySelectorAll('.filter')
    filters.forEach(filter => {
        if (filter !== btn.parentElement) {
            filter.classList.remove('open')
        } else {
            filter.classList.toggle('open')
        }
    })
}

function getUniqueValues(arr) {
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
            type: 'appliance'
        },
        {
            list: [...new Set(listUtensils)].map(capitalizeFirstLetter),
            type: 'utensils'
        }
    ]
}

function addActiveClass(badgesList) {
    badgesList.forEach(({type, name}) => {
        document.querySelector(`[data-type="${type}"][data-id="${name}"]`).classList.add('active')
    })
}

const searchPanel = document.getElementById('search-panel')
searchPanel.addEventListener('submit', (event) => {
    event.preventDefault()
    // Get search value without spaces and lowercase
    searchValue = Object.fromEntries(new FormData(event.target)).search.trim().toLowerCase()
    if (searchValue) search(badges)
})
