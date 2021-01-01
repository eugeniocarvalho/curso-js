let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é ${num}`)

num[5] = 1
console.log(`Valor 1 adicionado ${num}`)

num.push(40)
console.log(`Valor 4 adicionado ${num}`)

console.log(`O vetor tem ${num.length} elementos`)

const a = num.sort()
console.log(`Vetor ordenado: ${a}`)