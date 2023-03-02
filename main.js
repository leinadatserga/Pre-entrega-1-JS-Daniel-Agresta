document.getElementById("titulo");
let nombre;
let apellido;
let cargo;
let horasTotales=parseInt (0);
let mensualidad=parseFloat (0);
let sueldoCargo=parseFloat (0);
alert ("Hola, gracias por usar la página!");
nombre=prompt("Ingrese su nombre:");
apellido=prompt("Ahora su apellido:");
cargo=+prompt("Con que cargo se desempeña en la empresa?\nIngrese un número del 1 al 4 según la tabla de referencia:\n4 - (peón)\n3 - (medio oficial)\n2 - (oficial)\n1 - (instalador)");
while(cargo>4){
    alert("No has ingresado un cargo válido!");
    cargo=+prompt("Con que cargo se desempeña en la empresa?\nIngrese un número del 1 al 4 según la tabla de referencia:\n4 - (peón)\n3 - (medio oficial)\n2 - (oficial)\n1 - (instalador)");
}
let parrafo = document.getElementById("saludo")
parrafo.innerHTML = "Hola "+nombre+" "+apellido+" es un gusto tenerte por aquí!"+"<br>";
parrafo.innerHTML += "Para saber a cuanto asciende lo generado en el mes, deberás completar los datos a continuación:"+"<br>";
for(let a=1; a<=4; a=a+1){
    let horas= +prompt("ingrese la cantidad de horas trabajadas en la semana "+a);
    horasTotales=(horas+horasTotales);
    console.log(horasTotales);
}

switch(cargo){
    case 1:
        cargo="Instalador";
        sueldoCargo=40;
        break;
    case 2:
        cargo="Oficial";
        sueldoCargo=32;
        break;
    case 3:
        cargo="Medio oficial";
        sueldoCargo=27;
        break;
    case 4:
        cargo="Peón";
        sueldoCargo=15;
        break;
    default:
        alert("No has ingresado un cargo válido")
        break;
}
mensualidad=horasTotales*sueldoCargo;
parrafo.innerHTML += "Tienes un total de "+horasTotales+" horas trabajadas en el mes."+"<br>";
parrafo.innerHTML += "Te desempeñas con un cargo de "+cargo+", por lo tanto recibirás una mensualidad de U$D "+mensualidad+" (dólares americanos)";