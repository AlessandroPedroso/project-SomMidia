const tocaSom = (idElementoAudio) => {

    const elemento = document.querySelector(idElementoAudio);
    
    if (elemento !== null) {

       elemento.localName === 'audio' ? elemento.play() : alert('seletor inválido');

    }else{

        alert('elemento não encontrado');
    }

}

const listaDeTecla = document.querySelectorAll('.tecla')


for (let contador = 0; contador < listaDeTecla.length; contador++) {

    const tecla = listaDeTecla[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.addEventListener('click', () => {
        tocaSom(idAudio);
    })

    tecla.addEventListener('keydown', (evento) => {
        if (evento.code === "Space" || evento.code === "Enter") {
            tecla.classList.add('ativa');
        }

    })

    tecla.addEventListener('keyup', () => {

        tecla.classList.remove('ativa');
    })

}

// let contador = 0;

// while(contador < listaDeTecla.length){

//    const instrumento =  listaDeTecla[contador].classList[1];

//     listaDeTecla[contador].addEventListener('click', () =>{
//         tocaSom(`#som_${instrumento}`)
//     })

//     contador += 1;
// }

