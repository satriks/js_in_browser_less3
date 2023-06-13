
document.querySelectorAll('.dropdown').forEach(element => {element.addEventListener('click', openDrop)});


function openDrop (event) {
    let value = this.firstElementChild
    event.preventDefault();

    this.lastElementChild.classList.toggle('dropdown__list_active')

    this.closest('.card').style.marginBottom = 100  + 'px'
    if (!this.lastElementChild.classList.contains('dropdown__list_active')) {
        this.closest('.card').style.marginBottom = 30  + 'px'
    
    value.innerText = event.target.innerText.trim()
        }
    }
