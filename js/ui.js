class Interfaz {

    constructor(){
        this.init()
    }
    init(){
        this.construirSelect()
    }

    construirSelect(){
        cotizador.obtenedrMonedasAPI()
            .then(monedas =>{
                const select = document.querySelector(`#criptomoneda`)
                for(const [key,value] of Object.entries(monedas.monedas.Data)){

                    const opcion = document.createElement(`option`)
                    opcion.value = value.Symbol
                    opcion.appendChild(document.createTextNode(value.CoinName))
                    select.appendChild(opcion)
                    // console.log(value)
                }
        })
    }


    mostrarMensaje(mensaje,clases){
        const div = document.createElement(`div`)
        div.className = clases
        div.appendChild(document.createTextNode(mensaje))

        // console.log(div)
        
        // seleccionar mensajes
        const divMensajes = document.querySelector(`.mensajes`)
        divMensajes.appendChild(div)
        
        setTimeout(()=>{
            document.querySelector(`.mensajes div`).remove()
        },3000)

        // mostrar contenido
    }

    // imprime el resultado de la cotizacion
    mostrarResultado(resultado,moneda,crypto){
        const datosMoneda = resultado[crypto][moneda];
        
        let precio = datosMoneda.PRICE.toFixed(5)
        console.log(datosMoneda) 
        // construir el template
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de ${precio}</p>
                </div>
            </div>
        `

        
        document.querySelector(`#resultado`).innerHTML = templateHTML
    }
}