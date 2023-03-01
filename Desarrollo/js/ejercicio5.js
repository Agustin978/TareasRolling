let numeros = [];

for(let i = 0; i<2;i++)
{
    numeros[i] = prompt("Introducir un valor:");
}

document.write("El resultado de la suma entre ",numeros[0]," + ",numeros[1]," es: "+(parseInt(numeros[0]) + parseInt(numeros[1])));