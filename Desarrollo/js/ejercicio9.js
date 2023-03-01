let frase;

frase = prompt("Introduzca una frase:");
document.write("<h2>La frase ingresada es: "+frase+"</h2>");
document.write("<h3>Las vocales de la misma son:</h3>");

for(let i = 0; i < frase.length; i++)
{
    if(frase[i] === "a" || frase[i] === "A" || frase[i] === "e" || frase[i] === "E" || frase[i] === "i" || frase[i] === "I" || frase[i] === "o" || frase[i] === "O" || frase[i] === "u" || frase[i] === "U" )
    {
        document.write(frase[i]+"</br>");
    }
}
