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

//Initial rendering
render(recipes)

function render(recipesList, badgesList = []) {
    changeNoResultDisplay(recipesList.length)
    const uniqueValueWithFiltersValue = getUniqueValues(recipesList, filtersInputValue)
    DOMRecipes.innerHTML = getRecipesTemplate(recipesList)
    uniqueValueWithFiltersValue.forEach(el => {
        if (el.type === 'ingredients') DOMFilterIngredients.innerHTML = getFilterListTemplate(el)
        else if (el.type === 'appliances') DOMFilterAppliance.innerHTML = getFilterListTemplate(el)
        else if (el.type === 'utensils') DOMFilterUtensils.innerHTML = getFilterListTemplate(el)
    })
    DOMBadges.innerHTML = getBadgesTemplate(badgesList)
    if (recipesList.length) {
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
        clearInputAndRemoveAttr(filterOption.dataset.type)
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
    console.time('search')
    const filteredRecipesBySearchInput = recipes.filter(({name,ingredients,description}) => JSON.stringify({name,ingredients,description}).toLowerCase().includes(searchValue))
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
            } else if (type === 'appliances') {
                return appliance.toLowerCase() === name.toLowerCase()
            } else if (type === 'utensils') {
                return ustensils.some((utensil) => utensil.toLowerCase() === name.toLowerCase())
            }
        })
    })
    console.timeEnd('search')
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
        document.querySelector(`[data-type="${type}"][data-id="${name}"]`)?.classList.add('active')
    })
}

function clearInputAndRemoveAttr(type) {
    document.querySelector(`input[data-name="${type}"]`).value = ''
    document.querySelector(`#filter__${type}`).removeAttribute('style')
    filtersInputValue[type] = ''
}

function changeNoResultDisplay(condition) {
    const noResult = document.querySelector('.no-result')
    if (condition) {
        noResult.style.display = 'none'
    } else {
        noResult.style.display = 'block'
    }
}

searchPanel.addEventListener('submit', (event) => {
    event.preventDefault()
    // Get search value without spaces and lowercase
    searchValue = Object.fromEntries(new FormData(event.target)).search.trim().toLowerCase()
    if (searchValue.length > 2) {
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
        if (target.value && !filterListIsOpen) {
            filterList.setAttribute('style', `display: flex;flex-direction: column;row-gap: 5px;`)
        } else {
            filterList.removeAttribute('style')
        }
        filtersInputValue[target.dataset.name] = target.value
        search(badges)
    })
})