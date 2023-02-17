// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 const altura = Number(prompt('Qual a altura do retângulo?'))
 const largura = Number(prompt('Qual a largura do retângulo?'))
 const areaRetangulo = altura * largura
 console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui]
 const anoAtual = Number(prompt('Qual o ano atual?'))
 const anoNascimento = Number(prompt('Qual o ano do seu Nascimento?'))
const idade = anoAtual - anoNascimento
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 const imc = peso / (altura * altura).toFixed(2)
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite seu nome:')
  const idade = Number(prompt('Digite sua idade:'))
  const email = prompt('Digite seu email:')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const corUm =prompt('Qual sua cor favorita?')
const corDois =prompt('Qual sua segunda cor favorita?')
const corTres =prompt('Qual sua terceira cor favorita?')
const coresFavoritas = [corUm, corDois, corTres]
console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const calculoIngresso = custo / valorIngresso
return calculoIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return primeiroItem = array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return ultimoItem = array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui 
    const Array1 = array[0]
    const ultimoArray = array[array.length-1]
    array[0] = ultimoArray
    array[array.length-1] = Array1
    return array
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Informe o ano atual:'))
  const anoDeNascimento = Number(prompt('Informe o ano deNascimento:'))
  const rg = Number(prompt('Informe o ano de emissão do seu RG:'))
  const idade = anoAtual - anoDeNascimento
  const comparacao = anoAtual - rg

     if (idade <= 20 && comparacao < 5 ) {
    console.log(false)
   } else if ( idade > 20 && idade < 50 && comparacao < 10){
     console.log(false)
}     else if ( idade > 50 && comparacao < 15 ){ 
      console.log(false)
} else {
  console.log(true)
}
}
checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
    const anoBiSexto = ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0
    return anoBiSexto
  }
checaAnoBissexto()

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade =prompt('Você tem mais de 18 anos?')
  const escolaridade = prompt(' Você possui ensino médio completo?')
  const horario =prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  
  if (idade === 'sim' && escolaridade === 'sim' && horario === 'sim') {
    console.log(true)
  } else {
    console.log(false)
  }
  
  }
  checaValidadeInscricaoLabenu()
