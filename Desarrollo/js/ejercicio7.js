let numeros = [];

for(let i = 0; i<3 ;i++)
{
    numeros[i] = prompt("Introducir un valor:");
}

if(parseInt(numeros[0]) > parseInt(numeros[1]) && parseInt(numeros[0]) > parseInt(numeros[2]))
{
    document.write("El numero mas grande es: "+numeros[0]);
}else
{
    if(parseInt(numeros[1]) > parseInt(numeros[0]) && parseInt(numeros[1]) > parseInt(numeros[2]))
    {
        document.write("El numero mas grande es: "+numeros[1]);
    }else
    {
        document.write("El numero mas grande es: "+numeros[2]);
    }
}