var DOM = {
    btn: '.btn',
    google: '#google',
    typing: '.typing',
    areU: '.areU'
};

let timer;

document.querySelector(DOM.btn).addEventListener('click', doThis);
const myLink = document.querySelector(DOM.google);
const getTyping = document.querySelector(DOM.typing);
const areU = document.querySelector(DOM.areU);


getTyping.addEventListener('keydown', function(){
    areU.textContent = 'You are typing...'
});

getTyping.addEventListener('keyup', function(){
    clearTimeout(timer);
    timer = setTimeout(() => {
        areU.textContent = ''
    }, 1000)
})

myLink.addEventListener('click', function(event){
    event.preventDefault();
    alert('Link not available');
})

function doThis(e){
    console.log(e);
}

document.querySelector('.container').addEventListener('select', function(e){
    e.preventDefault();
    alert('you cant copy')
})
