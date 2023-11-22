const nome = "Jõlã"
console.log(nome, typeof nome)

// enum

enum Cor {
    cinza, // 0
    verde = 100, // 100
    azul = 2, // 2
    amarelo // 3
}
let minhaCor: Cor = Cor.verde
console.log(minhaCor)

// função

function retorneNome(): string {
    return "Jaum"
}

console.log(retorneNome())

function digaOi(): void {
    console.log("Oi!")
}

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}
console.log(multiplicar(2, 11))

let calculo: (numA: number, numB: number) => number
calculo = multiplicar
console.log(calculo(1.1, 3).toFixed(2))

// objetos

let usuario = {
    nome: "Jaum",
    idade: 21
}

let use: {
    name: string,
    age: number
}

type Funcionario = {
    supervisores: string[],
    ponto: (hora: number) => string
}

let funcionario: Funcionario = {
    supervisores: ["Jerson", "Abigadi"],
    ponto: (hora: number) => {
        let result: string = ""
        if (hora <= 8) {
            result = "Normal."  
        }
        if (hora > 8) {
            result = "Estouro."
        }
        return result
    }
}

let funcionario2: Funcionario = {
    supervisores: ["Wahmuu", "Cars"],
    ponto: (hora: number) => {
        let result: string = ""
        if (hora <= 8) {
            result = "Normal."  
        }
        if (hora > 8) {
            result = "Estouro."
        }
        return result
    }
}

// union types

let nota: number | string = 10
console.log(`Minha nota é ${nota}.`)

nota = '10'
console.log(`Minha nota é ${nota}.`)