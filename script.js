const a = document.querySelector('input')
const btn = document.querySelector('.regestration__log > button')

btn.addEventListener('click', () => {
    alert('Thank you for regestration!') 
} )

const btn2 = document.querySelector('.regestration__info > button')
btn2.addEventListener('click' , (e) => {
    e.target
    window.location.replace('https://myaccount.google.com/personal-info');
} )