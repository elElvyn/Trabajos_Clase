let costo = 500;
let porcentaje = 20;
function CalcularPorcentaje(costo,porcentaje){
    let valor = costo * porcentaje / 100;
    let suma = valor + costo;
    return suma;
}
console.log(CalcularPorcentaje(costo,porcentaje));