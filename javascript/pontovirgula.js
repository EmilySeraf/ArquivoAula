function pontovirgula(numero){
 arredondado = numero.toFixed(2)
 return ` R$${arredondado.replace('.',',')}`

}
console.log(pontovirgula(0.30000000000000004))
