"use strict";
const nome = "Jõlã";
console.log(nome, typeof nome);
// enum
var Cor;
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["verde"] = 100] = "verde";
    Cor[Cor["azul"] = 2] = "azul";
    Cor[Cor["amarelo"] = 3] = "amarelo"; // 3
})(Cor || (Cor = {}));
let minhaCor = Cor.verde;
console.log(minhaCor);
// função
function retorneNome() {
    return "Jaum";
}
console.log(retorneNome());
function digaOi() {
    console.log("Oi!");
}
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 11));
let calculo;
calculo = multiplicar;
console.log(calculo(1.1, 3).toFixed(2));
// objetos
let usuario = {
    nome: "Jaum",
    idade: 21
};
let use;
let funcionario = {
    supervisores: ["Jerson", "Abigadi"],
    ponto: (hora) => {
        let result = "";
        if (hora <= 8) {
            result = "Normal.";
        }
        if (hora > 8) {
            result = "Estouro.";
        }
        return result;
    }
};
let funcionario2 = {
    supervisores: ["Wahmuu", "Cars"],
    ponto: (hora) => {
        let result = "";
        if (hora <= 8) {
            result = "Normal.";
        }
        if (hora > 8) {
            result = "Estouro.";
        }
        return result;
    }
};
// union types
let nota = 10;
console.log(`Minha nota é ${nota}.`);
nota = '10';
console.log(`Minha nota é ${nota}.`);
