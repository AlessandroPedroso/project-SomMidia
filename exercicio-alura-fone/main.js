const listaButton =document.querySelectorAll('[type=button]')
const inputTel = document.querySelector('[type=tel]')

for(let indice = 0; indice < listaButton.length; indice++){
    
    const tecla = listaButton[indice]
    
    tecla.addEventListener('click', ()=>{
          
      inputTel.value += tecla.value
    })
}