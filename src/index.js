import recipes from "./data/recipes.js";
import getRecipesTemplate from "./view/getRecipesTemplate.js";
import getBadgesTemplate from "./view/getBadgesTemplate";
import getFilterListTemplate from "./view/getFilterListTemplate";
import getUniqueValues from "./utils/getUniqueValues";

//Take DOM elements
const DOMRecipes = document.querySelector('#recipes')
const DOMFilterIngredients = document.querySelector('#filter__ingredients')
const DOMFilterAppliance = document.querySelector('#filter__appliances')
const DOMFilterUtensils = document.querySelector('#filter__utensils')
const DOMBadges = document.querySelector('#badges')
const filterInputs = Array.from(document.querySelectorAll('.filter__input'))
const searchPanel = document.querySelector('#search-panel')

let badges = []
let searchValue = ''
const filtersInputValue = {ingredients: '', appliances: '', utensils: ''}
let submitValueIsEmpty = true


render(recipes)

function render(recipesList, badgesList = []) {
    const uniqueValue = getUniqueValues(recipesList)
    const uniqueValueWithFiltersValue = Object.entries(filtersInputValue).map(([filterType, filterValue]) => {
        for (const {list, type} of uniqueValue) {
            if (filterType === type) {
                return {list: list.filter(e => e.toLowerCase().includes(filterValue.toLowerCase())), type}
            }
        }
    })
    DOMRecipes.innerHTML = getRecipesTemplate(recipesList)
    uniqueValueWithFiltersValue.forEach(el => {
        if (el.type === 'ingredients') DOMFilterIngredients.innerHTML = getFilterListTemplate(el)
        else if (el.type === 'appliances') DOMFilterAppliance.innerHTML = getFilterListTemplate(el)
        else if (el.type === 'utensils') DOMFilterUtensils.innerHTML = getFilterListTemplate(el)
    })
    DOMBadges.innerHTML = getBadgesTemplate(badgesList)
    if(recipesList.length) {
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
        console.log(badges)
        badges = badges.filter(({name}) => name !== badgeCloseBtn.dataset.id)
        search(badges)
    }
})

const search = (badgesList) => {
    const filteredRecipesBySearchInput = recipes.filter(recipe => JSON.stringify(recipe).toLowerCase().includes(searchValue))
    // Filter recipes by badges
    const filterRecipes = filteredRecipesBySearchInput.filter(({ingredients, appliance, ustensils}) => {
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

function addActiveClass(badgesList) {
    badgesList.forEach(({type, name}) => {
        document.querySelector(`[data-type="${type}"][data-id="${name}"]`).classList.add('active')
    })
}

searchPanel.addEventListener('submit', (event) => {
    event.preventDefault()
    // Get search value without spaces and lowercase
    searchValue = Object.fromEntries(new FormData(event.target)).search.trim().toLowerCase()
    if (searchValue) {
        search(badges)
        submitValueIsEmpty = false
    } else if (!submitValueIsEmpty && !searchValue) {
        search(badges)
        submitValueIsEmpty = true
    }
})

filterInputs.forEach(input => {
    input.addEventListener('input', ({target}) => {
        const filterList = document.querySelector(`#filter__${target.dataset.name}`)
        const filterListIsOpen = target.parentElement.classList.contains('open')
        if (target.value && filterListIsOpen) {
            console.log(target.parentElement, 'if else')
        } else if (target.value) {
            filterList.setAttribute('style', `display: flex;flex-direction: column;row-gap: 5px;`)
        } else {
            filterList.setAttribute('style', '')
        }
        filtersInputValue[target.dataset.name] = target.value
        search(badges)
    })
})