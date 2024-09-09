document.addEventListener('DOMContentLoaded', function() {
    const plusbtn = document.querySelectorAll('.plus-btn');
    const minusbtn = document.querySelectorAll('.minus-btn');
    const deletebtn = document.querySelectorAll('.delete-btn');
    const likebtn = document.querySelectorAll('.like-btn');

    plusbtn.forEach(button => {
    button.addEventListener('click', function() {
        let nbChaussure = this.parentElement.querySelector("input"); 
        let quantity = parseInt(nbChaussure.value)
        nbChaussure.value = quantity + 1
        })})

    minusbtn.forEach(button => {
    button.addEventListener('click', function() {
        let nbChaussure = this.parentElement.querySelector("input")
        let quantity = parseInt(nbChaussure.value)
        if (quantity > 1) {
        nbChaussure.value = quantity - 1}
        })})

    deletebtn.forEach(button => {
    button.addEventListener('click', function() {
        const supProduct = this.closest('.item')
        supProduct.remove()
        })})

    likebtn.forEach(button => {
        button.addEventListener('click', function() {
        this.classList.toggle('is-active')
    })})
    
    })
