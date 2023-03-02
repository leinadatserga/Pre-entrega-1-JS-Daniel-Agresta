document.getElementById("titulo");
let nombre;
let apellido;
let cargo;
let horasTotales=parseInt (0);
let mensualidad=parseFloat (0);
let sueldoCargo=parseFloat (0);
function calculo(hs, cgo){
    mensualidad=hs*cgo;
}
alert ("Hola, gracias por usar la página!");
nombre=prompt("Ingrese su nombre:");
console.log("Nombre del operario: "+nombre+".");
apellido=prompt("Ahora su apellido:");
console.log("Apellido del operario: "+apellido+".");
cargo=+prompt("Con que cargo se desempeña en la empresa?\nIngrese un número del 1 al 4 según la tabla de referencia:\n4 - (peón)\n3 - (medio oficial)\n2 - (oficial)\n1 - (instalador)");
while(cargo>4){
    alert("No has ingresado un cargo válido!");
    cargo=+prompt("Con que cargo se desempeña en la empresa?\nIngrese un número del 1 al 4 según la tabla de referencia:\n4 - (peón)\n3 - (medio oficial)\n2 - (oficial)\n1 - (instalador)");
}
let parrafo = document.getElementById("saludo")
parrafo.innerHTML = "Hola "+nombre+" "+apellido+", es un gusto tenerte por aquí!"+"<br>"+"<br>";
parrafo.innerHTML += "Para saber a cuanto asciende lo generado en el mes, deberás completar los datos a continuación:"+"<br>"+"<br>";
for(let a=1; a<=4; a=a+1){
    let horas= +prompt("ingrese la cantidad de horas trabajadas en la semana "+a);
    horasTotales=(horas+horasTotales);
    console.log(horasTotales+" horas.");
}

switch(cargo){
    case 1:
        cargo="Instalador";
        sueldoCargo=40;
        console.log(cargo+" U$D "+sueldoCargo+" por hora.");
        break;
    case 2:
        cargo="Oficial";
        sueldoCargo=32;
        console.log(cargo+" U$D "+sueldoCargo+" por hora.");
        break;
    case 3:
        cargo="Medio oficial";
        sueldoCargo=27;
        console.log(cargo+" U$D "+sueldoCargo+" por hora.");
        break;
    case 4:
        cargo="Peón";
        sueldoCargo=15;
        console.log(cargo+" U$D "+sueldoCargo+" por hora.");
        break;
    default:
        alert("No has ingresado un cargo válido");
        console.log("Cargo no válido");
        break;
}
calculo (horasTotales, sueldoCargo);
console.log("Total del mes: U$D "+mensualidad);
parrafo.innerHTML += "Tienes un total de "+horasTotales+" horas trabajadas en el mes."+"<br>"+"<br>";
parrafo.innerHTML += "Te desempeñas con un cargo de "+cargo+", por lo tanto recibirás una mensualidad de U$D "+mensualidad+" (dólares americanos)";