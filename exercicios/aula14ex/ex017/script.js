function gerarTabuada() {
  const multiplicador = Number.parseInt(document.getElementById('multiplicador').value)
  res = document.querySelector('#res')

  if (multiplicador) {
    res.value = ''
    for (let i = 0; i < 10; i++)
      res.value += `${multiplicador} x ${i} = ${multiplicador * i}\n`
  }
  else {
    window.alert('Insira um número para gerar a tabuada!')
    res.value = ''
  }
}