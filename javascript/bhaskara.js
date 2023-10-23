function bhaskara(a, b, c){
    var delta = (b * b) - 4 * a * c
    var x1 = (- b + Math.sqrt(delta)) / 2 * a
    var x2 = (- b - Math.sqrt(delta)) / 2 * a

if (delta >= 0){
    console.log(x1, x2)
}
else {

    console.log ("Delta é negativo")
}
}

bhaskara(3,-5,12)
