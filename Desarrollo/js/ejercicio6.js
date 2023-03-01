let numeros = [];

for(let i = 0; i<2;i++)
{
    numeros[i] = prompt("Introducir un valor:");
}

if(parseInt(numeros[0]) > parseInt(numeros[1]))
{
    document.write("El numero mas grande es: "+numeros[0]);
}else
{
    document.write("El numero mas grande es: "+numeros[1]);
}