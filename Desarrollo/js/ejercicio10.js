let numero;

numero = prompt("Ingrese el numero a comprobar:");

if(parseInt(numero) % 2 == 0 || parseInt(numero) % 3 == 0 || parseInt(numero) % 5 == 0 || parseInt(numero) % 7 == 0)
{
    document.write("El numero "+numero+" si es divisible en alguno de los numeros {2,3,5,7}");
}else
{
    document.write("El numero "+numero+" no es divisible en alguno de los numeros {2,3,5,7}");
}
