'use strict'

const botaoCalcular = document.getElementById('btn-calc') 

function mostraComissao (){
 const nome = document.getElementById('caixa-nome')
 const valor = document.getElementById('caixa-valor')
 const resultado = document.getElementById('resultado')

 const salario = valor.value * 0.08
 
 resultado.textContent = `${nome.value} o valor das suas vendas é ${valor.value} e seu salário é, ${salario}`
}

botaoCalcular.addEventListener('click', mostraComissao)