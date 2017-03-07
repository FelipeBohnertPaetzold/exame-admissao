module.exports = class Troco {
  // reais: Valor em reais podendo conter centavos
  // Deve retornar um objeto com a quantidadede notas
  
  calculaReais(valor, qtdeNotas) {
    while(valor > 0) {
      if(valor >= 100) {
        qtdeNotas['100'] ++;
        valor = valor - 100;
      }
      if(valor >= 50) {
        qtdeNotas['50'] ++;
        valor = valor - 50;
      }
      if(valor >= 20) {
        qtdeNotas['20'] ++;
        valor = valor - 20;
      }
      if(valor >= 10) {
        qtdeNotas['10'] ++;
        valor = valor - 10;
      }
      if(valor >= 5) {
        qtdeNotas['5'] ++;
        valor = valor - 5;
      }
      if(valor >= 2) {
        qtdeNotas['2'] ++;
        valor = valor - 2;
      }
      if(valor >= 1) {
        qtdeNotas['1'] ++;
        valor = valor - 1;
      }
      if(valor >= 0.5) {
        qtdeNotas['0.5'] ++;
        valor = Number((valor - 0.5).toFixed(2));
      }
      if(valor >= 0.25) {
        qtdeNotas['0.25'] ++;
        valor = Number((valor - 0.25).toFixed(2));
      }
      if(valor >= 0.1) {
        qtdeNotas['0.1'] ++;
        valor = Number((valor - 0.1).toFixed(2));
      }
      if(valor >= 0.05) {
        qtdeNotas['0.05'] ++;
        valor = Number((valor - 0.05).toFixed(2));
      }
      if(valor >= 0.01) {
        qtdeNotas['0.01'] ++;
        valor = Number((valor - 0.01).toFixed(2));
      }
    }
    return qtdeNotas;
  }

  getQtdeNotas (reais) {
    let qtdeNotas = {
      '100': 0,
       '50': 0,
       '20': 0,
       '10': 0,
        '5': 0,
        '2': 0,
        '1': 0,
      '0.5': 0,
     '0.25': 0,
      '0.1': 0,
     '0.05': 0,
     '0.01': 0,
   }

   return this.calculaReais(reais, qtdeNotas);
  }
}
