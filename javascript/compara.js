function compara(pontuacoes) {
    let array = pontuacoes.split(" ").map(Number)
    let resposta = [0, 0]
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if (element > array[index - 1]) {
            resposta[0]++
        }
    }
    let menor = array.reduce((acc, cur) => acc < cur ? acc : cur)
    resposta[1] = array.indexOf(menor)+1
    return resposta
}
console.log(compara("10 20 20 8 25 3 0 30 1"))