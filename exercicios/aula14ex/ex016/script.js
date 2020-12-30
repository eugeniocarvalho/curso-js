function contar() {
  let inicial = Number.parseInt(document.getElementById('inicio').value)
  const final = Number.parseInt(document.getElementById('fim').value)
  const passo = Number.parseInt(document.getElementById('passo').value)
  let res = document.querySelector('#res')

  console.log(inicial)

  if (inicial > -1 && final > 0 && passo > 0) {
    if (inicial < final) {
      res.innerHTML = '<p>Contando:</p>'
      res.innerHTML += '<p>'

      for (inicial; inicial <= final; inicial += passo)
        res.innerHTML += `${inicial} &#x1F449; `

      res.innerHTML += '&#x1F3C1;</p>'
    }
    else
      res.innerHTML = '<p>[ERROR]! Início maior que o fim!</p>'
  }
  else
    res.innerHTML = '<p>Preparando a contagem...</p>'
}