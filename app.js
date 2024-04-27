//Guardo un elemento que tine por id (username, password, buttton)

const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');
const menu = document.getElementById('menu');
const form = document.getElementById('formAction');

let saldoElemento = document.getElementById('saldo')
let mensajeElemento = document.getElementById('mensaje'); 
let btnConsultar = document.getElementById('btnConsultar');
let btnDepositar = document.getElementById('btnDepositar');
let btnRetirar = document.getElementById('btnRetirar');
/*Se activa cada vez que hacemos Click, su objetivo es eliminar la recarga de la pagina */


button.addEventListener('click', (e) => {  
    e.preventDefault();

    // obtener valores 
    const usernameValue = username.value;
    const passwordValue = password.value;

    //usuario y contrasena
    const usuario = "ariel"; 
    const contraseña = "123"; 

    // validar nombre y pass
    if (usernameValue === usuario && passwordValue === contraseña) {
      //si es correcto
        const data = {
            username: usernameValue,
            password: passwordValue
        };

        // Ocultar el menú
        menu.classList.add("hide");
        menu.classList.remove("hide");

        console.log(data);
    } else {
        // usuario o pass incorrecto
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
    }

    // Ocultarform
    form.classList.add("hide");
});

let saldo = 1000;

function consultarSaldo(){
    return saldo
};

//deposito
function depositarDinero(cantidad){
    if(cantidad <= 0){
        return 'La cantidad a depositar tiene que ser mayor a 0'
    } else {
        saldo += cantidad;
        return `Se depositaron $${cantidad}. Saldo a actual: $${saldo}`
    }
}

//retiro
function retirarDinero(cantidad){
    if(cantidad <= 0){
        return 'La cantidad a retirar debe ser mayor a 0'
    }else if (cantidad > saldo){
        return 'No tienes suficiente saldo para realizar estar transaccion'
    }else {
        saldo -= cantidad;
        return `Se retiraron $${cantidad}. Saldo actual $${saldo}`;
    }
}

// mostrar saldo
function mostrarSaldo(){
    saldoElemento.innerText= `$${consultarSaldo()}`;
}

// msj pantalla
function mostrarMensaje(mensaje){
    mensajeElemento.innerText= mensaje;
}

// interaccion boton deposito
function depositar(){
    let cantidad= parseInt(btnDepositar.value);
    let mensaje = depositarDinero(cantidad);
    mostrarSaldo();
    mostrarMensaje(mensaje)
}

// interaccion boton retiro
function retirar(){
    let cantidad= parseInt(btnRetirar.value);
    let mensaje= retirarDinero(cantidad);
    mostrarSaldo();
    mostrarMensaje(mensaje);
}

mostrarSaldo();
    


        
