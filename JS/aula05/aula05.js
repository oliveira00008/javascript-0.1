/*Aquivos js aula 05 Objeto*/

//OBJETOS SAO ESTRUTURA IBRIDAS QUE GUARDA VALORES DADOS NOVOS.

//CRIAR OBJETO
let pessoa = { //<--- dentros da chaves eu posso por elementos ou atributos 
    nome   : 'gabriel',
    idade  : 40,
    peso   : 83.5, 
    altura : 1.75,
    doador : false
}

let produto = {
    descriçao : [],
    preco :[]
}

//tambem  possos usar arreis demtro de objeto []
const carro = {
    marca : ['ford', 'fiat', 'gm'],
    modelo: ['ka', 'uno', 'corsa'],
    ano :[1999, 2005, 2010],
}

//Como acessar uma PROPRIEDADE usando .

pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura

//acessar propriedade USANDO [''] dulas ou simples as aspa

pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']

/* Tambem da pra fazer operaçoes */

//PERAÇAO IMC = peso / (altura * altura)
//pega o peso multiplica pela altura * altura 

let imc = peso / (pessoa.altura * pessoa.altura)

// Se eu quiser limitar um pouco o numero eu uso o metodo toFixed .toFixed(x) <-- emtre parente eu coloco quantas casa decimais eu quero.

//limita o numero da casas decimais do imc

console.log("iMC" + imc.toFixed(2))

//Podemos alterar os valores dos OBJETO atraves do operador de atribuiçao.

//ex...
pessoa.nome = "gabriel Alves"
// tenho que tomar cuidado com colocar o produto pela primeira vez ele vai dirto mas se colocar mas de uma ves ele acaba subistituindo como facco para issso nao acontecer.

produto.descriçao =['Arroz']
produto.preco['4.99']

//ex..  Uso o metodo spreed operador

produto.descriçao = [...produto.descriçao, 'feijao', 'trigo']
produto.preco = [...produto.preco, 9.99]

//tabem podemos usar esse metodo de spreed operador para variavel COSTANT

//USANDO SPREED OPERATOR EM OBJETO CONST 

carro.marca = [...carro.marca, 'wv']
carro.ano = [...carro.ano, 1979]
carro.modelo = [...carro.modelo, 'fusca']


