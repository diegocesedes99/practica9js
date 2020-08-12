let elemento = document.querySelectorAll('.random p')/*hacer listas*/

function cualquiera() {   
   let x=Math.floor(Math.random() * (256 - 0) + 0);
   let y=Math.floor(Math.random() * (256 - 0) + 0);  
   let z=Math.floor(Math.random() * (256 - 0) + 0);

    const p=event.currentTarget;

    p.style.color=`rgb(${x}, ${y}, ${z})`; 
}

function black (event){  

    const p = event.currentTarget;

    p.style.color = 'black';
}

const parrafos = document.querySelectorAll('p');

for (let i=0; i<parrafos.length; i++){
    parrafos[i].addEventListener('mouseenter',cualquiera);
}

for (let i=0; i<parrafos.length; i++){
    parrafos[i].addEventListener('mouseleave',black);
}

