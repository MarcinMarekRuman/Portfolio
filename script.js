const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');

const gitPhoto = document.querySelector('.fa-github');





gitPhoto.addEventListener('click', (e)=> {
    window.open( "https://github.com/MarcinMarekRuman");
})


button1.addEventListener('click', (e)=> {
    window.scroll({top: 20, behavior: "smooth"});
})

button2.addEventListener('click', (e)=> {
    window.scroll({top: 960, behavior: "smooth"});
})

button3.addEventListener('click', (e)=> {
    window.scroll({top: 1800, behavior: "smooth"});
})

button4.addEventListener('click', (e)=> {
    window.scroll({top: 3000, behavior: "smooth"});
})