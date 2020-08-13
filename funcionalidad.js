

// Variables globales
var canvas;
var ctx;
var con1;
var con2;
var e1;
var e2;

window.onload = function(){
    // Inicializa variables
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    con1 = document.getElementById("con-1");
    con2 = document.getElementById("con-2");
    e1 = document.getElementById("estado-c1");
    e2 = document.getElementById("estado-c2");
}



function testV2V(){
    // LLama a la función enviar datos, con valores
    enviarDatos(1, 2, "20.012344, -120.233450, l");
}
function enviarDatos(auto_remitiente, auto_receptor, datos){
    //Limpia canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);

    

    // Cambia estado de auto 1, para enviar datos

    con1.classList.remove("alert-danger");
    con1.classList.add("alert-success");
    e1.textContent = "Enviando "+datos +"...";


    con2.classList.add("alert-danger");
    con2.classList.remove("alert-success");
    e2.textContent = "Inactivo";

    // Genera onda
    generarOnda(datos);
}

function generarOnda(datos){

    // Variables para configurar la onda
    num_ondas = 5;
    radio_inicial = 20;
    onda_actual = 0;

    // Intervalo para animar onda
    var animacion_onda = setInterval(function(){
        onda_actual++;

        ctx.beginPath();

        // Crea arco
        ctx.arc(100 + (20*onda_actual), 100, radio_inicial, -Math.PI * (90 / 180), Math.PI* (90/180));
 
        
        
        ctx.lineWidth = 3;

        ctx.strokeStyle = "#264653";
        ctx.stroke();

        radio_inicial += 8;

        // Si ya se generaron todas las ondas termina el intervalo
        if(onda_actual == num_ondas){

            // Limpia el intervalo
            clearInterval(animacion_onda);
            console.log("deteniendo interval");

            // Cambia estado de auto 1 a inactivo
            con1.classList.add("alert-danger");
            con1.classList.remove("alert-success");
            e1.textContent = "Inactivo";

            recibirInformacion(datos);
        }
    },500);
}

// Función para recibir datos en auto 2
function recibirInformacion(datos){

    // Cambia etado de auto 2 para recibir datos
    con2.classList.remove("alert-danger");
    con2.classList.add("alert-warning");
    e2.textContent = "Recibiendo datos...";
    setTimeout(function(){
        // Muestra los datos recibidos
        con2.classList.remove("alert-warning");
        con2.classList.add("alert-success");
        e2.innerHTML = "Datos recibidos <b>"+datos+"</b>";
        ctx.clearRect(0,0,canvas.width, canvas.height);

    },2000);
}
