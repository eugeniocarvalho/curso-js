function gerarTabuada() {
  const multiplicador = document.getElementById('multiplicador').value
  const res = document.querySelector('#seltab')

  if (multiplicador.length !== 0) {
    res.setAttribute("style", "display: block;")
    res.innerHTML = ''
    for (let i = 0; i <= 10; i++) {
      let item = document.createElement('option')
      
      item.text =`${multiplicador} x ${i} = ${multiplicador * i}`

      res.appendChild(item)
    }
  }
  else {
    res.setAttribute("style", "display: none;")
    window.alert('Insira um número para gerar a tabuada!')
  }
}