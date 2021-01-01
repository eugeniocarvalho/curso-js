const valores = [8, 1, 7, 4, 3, 9]

console.log(valores)
console.log('Vetor original usando for')

for (let i = 0; i < valores.length; i++)
  console.log(`A posição ${i} tem o valor ${valores[i]}`)

console.log()
console.log('Vetor ordenado usando For in')

valores.sort()

for (let i in valores)
  console.log(`A posição ${i} tem o valor ${valores[i]}`)

console.log()
console.log('JavaScript, existe o valor 7 no vetor?')
console.log('Procurando...')

setTimeout(() => {
  if (valores.indexOf(7) !== -1)
    console.log(`Tem sim! Esta na posição ${valores.indexOf(7)}!`)
  else
    console.log('Não achei! :/')
 }, 2000)



