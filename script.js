const bar = document.getElementById('bar');
const nav = document.getElementById('ManuBar');

if(bar){
    bar.addEventListener('click' , () =>{
        nav.classList.add('open');
    })
};