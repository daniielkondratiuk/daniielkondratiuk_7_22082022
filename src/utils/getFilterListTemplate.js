export default function getFilterListTemplate({list, type}) {
    return list.map((ingredient, id) =>
        `<span class="filter__option-wrap"><span class="filter__option" data-id="${ingredient}" data-type="${type}">${ingredient}</span></span>`)
        .join('')
}