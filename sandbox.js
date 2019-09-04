const button = document.querySelector('.button')

button.addEventListener('click', function(e){
    alert('nice')
    e.stopPropagation()
})

const box = document.querySelector('.box')

box.addEventListener('click', function(){
    alert('also nice')
})
