const cotizador = new API(`ff34947c6b04a5737b7892b4596189a939d47ab00f2d99914e116cd4e6c633d1`)
const ui = new Interfaz()

// cotizador.obtenedrMonedasAPI()

// VALIDAR FORMULARIO 
const formulario = document.querySelector(`#formulario`)

formulario.addEventListener(`submit`,(e)=>{
    e.preventDefault()

    // leer la moneda seleccionada
    const monedaSelect = document.querySelector(`#moneda`)
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value
    // leer la criptomoneda seleccionada
    const criptomonedaSelect = document.querySelector(`#criptomoneda`)
    const criptomonedaSeleccionada = monedaSelect.options[criptomonedaSelect.selectedIndex].value
    console.log(criptomonedaSeleccionada)

    if(monedaSeleccionada == `` || criptomonedaSeleccionada == ``){
        const divMensajes = document.querySelector(`.mensajes`)
        
        if(divMensajes.innerHTML === `` || divMensajes.innerHTML === null){
            ui.mostrarMensaje(`ambos campos son obligatorios`,`alert bg-danger text-center`)
        }   
    }else{
        cotizador.obtenerValores(monedaSeleccionada,criptomonedaSeleccionada)
            .then(data=>{
                ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada,criptomonedaSeleccionada)
            })
    }
})