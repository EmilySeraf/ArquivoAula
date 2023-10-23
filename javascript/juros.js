function jurossimples(Ci, Tj, Ta){
var juros = Ci * Tj * Ta
var Montante = juros + Ci
return Montante

}

console.log (jurossimples(500,40,100))

function juroscomposto(Ci, i , Ta){
var juros = Ci * 1 + i ** Ta
var Montante = Ci + juros
return Montante
}

console.log (juroscomposto(400,80,40))