function arrCima(num) {
    var paraCima = 0;
    var teste1 = num;
    while (teste1 % 5 != 0) {
      teste1++;
      paraCima++;
    }
    return paraCima;
  }
  
  function arrBaixo(num) {
    var teste2 = num;
    var paraBaixo = 0;
    while (teste2 % 5 != 0) {
      teste2--;
      paraBaixo++;
    }
    return paraBaixo;
  }
  
  function testeArr(a, b) {
    if (a < b) {
      return "arredonda para cima";
    } else return "arredonda para baixo";
  }
  
  function recebe(num) {
    let paraCima = arrCima(num);
    let paraBaixo = arrBaixo(num);
    let resultado = testeArr(paraCima, paraBaixo);
    var resposta = num;
  
    if (resultado == "arredonda para cima") {
      while (resposta % 5 != 0) {
        resposta++;
      }
    } else if (resultado == "arredonda para baixo") {
      while (resposta % 5 != 0) {
        resposta--;
      }
    }
    return resposta;
  }
  function nota(num) {
    if ((0 <= num) & (num <= 100)) {
      if (num < 38) {
        return "reprova";
      } else {
        return recebe(num);
      }
    } else {
      return 'nota inválida'
    }
  }
  console.log(nota(53));