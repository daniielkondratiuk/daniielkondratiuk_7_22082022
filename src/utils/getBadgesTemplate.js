export default function getBadgesTemplate(badges) {
    return badges.map(({name,type}) => {
        let color = ''
        if (type === 'ingredients') {
            color = 'blue'
        }else if (type === 'appliance') {
            color = 'green'
        }else if (type === 'utensils') {
            color = 'tomato'
        }
        return ` 
        <span class="btn btn-sm badge-${color}">
            ${name} <span class="badge" data-id="${name}"><i class="fa-regular fa-circle-xmark"></i></span>
        </span>
    `}).join('')
}