let amigo = {
  nome: 'José',
  sexo: 'M',
  peso: 85.4,
  engordar(p = 0) {
    console.log('Engordou')
    this.peso += p
  }
}

console.log(amigo.engordar(4))
console.log(amigo.peso)