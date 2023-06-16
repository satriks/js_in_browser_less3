(function () {

let tabs = Array.from(document.querySelectorAll('.tab'))
tabs.forEach(el => el.addEventListener('click', handleTab))
let contents = Array.from(document.querySelectorAll('.tab__content'))

function handleTab () {
    for (let tab of tabs) {
        if (tab.classList.contains('tab_active')){
            tab.classList.toggle('tab_active')
        }
    }

    for (let cotent of contents) {
        if (cotent.classList.contains('tab__content_active')){
            cotent.classList.toggle('tab__content_active')
        }
    }
    let cont = contents[tabs.indexOf(this)]
    cont.classList.toggle('tab__content_active')
    this.classList.toggle('tab_active')

}
})()