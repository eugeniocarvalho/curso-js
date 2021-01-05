function gerarTabuada() {
  const multiplicador = document.getElementById('multiplicador').value
  const res = document.querySelector('#tabuada')

  if (multiplicador.length !== 0) {
    res.setAttribute("style", "display: inline;")
    res.value = ''

    for (let i = 0; i <= 10; i++) {
      res.value += `${multiplicador} x ${i} = ${multiplicador * i}\n`
    }
  }
  else {
    res.setAttribute("style", "display: none;")
    window.alert('Insira um número para gerar a tabuada!')
  }
}