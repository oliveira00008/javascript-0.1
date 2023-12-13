let produtos = ['aroz', 'feijao', 'leite']
var codigo = Array(10, 20, 30)
let meses = ['jan', 'fev', 'mar','abr']

//ADICIONAR NO FINAL phus = empurre

produtos.push('açucar')
codigo.push(40, 50, 60, 70)
meses.push('mai', 'jun', 'ago', '07')

//REMOVER do final pop = estorar

produtos.pop()
codigo.pop()
meses.pop()

//ADICINAR NO INICIO unshift
produtos.unshift('uva', 'maça')

//REMOVER DO INICIO shuft
produtos.shift()

//REMOVER DE uma posisao especifica = splice
//splice = emendar 
//posicao inicial , emquantos remove
 codigo.splice(1, 3)

 //COPIAR array slice = fatiar porçao 
 //posiçao inicial , faz copia
 let meses1 = meses.slice()
 let meses2 = meses.slice(0 , 3 )

// VER TAMANHO DOS array length complimentos

meses.length
meses1.length
meses2.length

//spreed operador ... copiar o conteudo todo.
let teste = [...produtos, 'ovo', 'pera']





