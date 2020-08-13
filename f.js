

var canvas;
var ctx;
var con1;
var con2;
var e1;
var e2;
window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    con1 = document.getElementById("con-1");
    con2 = document.getElementById("con-2");
    e1 = document.getElementById("estado-c1");
    e2 = document.getElementById("estado-c2");
}



function testV2V(){
    enviarDatos(1, 2, "20.012344, -120.233450, l");
}
function enviarDatos(auto_remitiente, auto_receptor, datos){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    generarOnda();

    con1.classList.remove("alert-danger");
    con1.classList.add("alert-success");
    e1.textContent = "Enviando "+datos +"...";
}

function generarOnda(){
    num_ondas = 5;
    radio_inicial = 20;
    onda_actual = 0;

    var animacion_onda = setInterval(function(){
        onda_actual++;

        ctx.beginPath();

        var dir = "rigth";
        if(dir === "right"){
            ctx.arc(100 + (20*onda_actual), 100, radio_inicial, -Math.PI * (90 / 180), Math.PI* (90/180));
        }
        else{
            ctx.arc(100 + (20*onda_actual), 100, radio_inicial, -Math.PI * (90 / 180), Math.PI* (90/180),true);
        }
        
        
        
        ctx.lineWidth = 3;

        ctx.strokeStyle = "#264653";
        ctx.stroke();

        radio_inicial += 8;
        if(onda_actual == num_ondas){
            clearInterval(animacion_onda);
            console.log("deteniendo interval");
            var con1 = document.getElementById("con-1");
            var e1 = document.getElementById("estado-c1");
            con1.classList.remove("alert-danger");
            con1.classList.add("alert-success");
        }
    },500);
}