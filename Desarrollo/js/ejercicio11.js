let numero;

numero = prompt("Ingrese el numero a comprobar:");

if(parseInt(numero) % 2 == 0)
{
    document.write("El numero "+numero+" si es divisible en 2");
}else if(parseInt(numero) % 3 == 0)
{
    document.write("El numero "+numero+" si es divisible en 3");
}else if(parseInt(numero) % 5 == 0)
{
    document.write("El numero "+numero+" si es divisible en 5");
}else if(parseInt(numero) % 7 == 0)
{
    document.write("El numero "+numero+" si es divisible en 7");
}else
{
    document.write("El numero "+numero+" no es divisible en ninguno de los numeros del conjunto {2,3,5,7}");
}
