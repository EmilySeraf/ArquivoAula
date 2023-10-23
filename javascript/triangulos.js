function triangulos(a , b ,c){
if (a === b && b === c)
return ("Ele é Equilátero")

else if (a === b && b != c || a != b && b === c|| c === a && b != c)
return ("Ele é Isósceles")

else{
    return (" Ele é Escaleno")

}
}

console.log (triangulos (3,4,7))