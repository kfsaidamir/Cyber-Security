const back = document.querySelector('button')
const btn = document.querySelector('.cyber__info > button')

back.addEventListener('click' , () => {
    window.location.replace('index.html')
    alert('One second!')
} )

btn.addEventListener('click' , () => {
    prompt('Do you like it?')
} )

