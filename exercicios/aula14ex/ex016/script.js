function contar() {
  const  formInicial = document.getElementById('inicio').value
  const  formFinal = document.getElementById('fim').value
  const  formPasso = document.getElementById('passo').value
  const formRres = document.querySelector('#res')

  if (formInicial.length !== 0 && formFinal.length !== 0) {

    let inicial = Number(formInicial)
    let final = Number(formFinal)
    let passo = Number(formPasso)

    if (formPasso.length === 0 || passo <= 0) {
      passo = 1
      window.alert('Passo Inválido! Considerado passo = 1')
    }

    res.innerHTML = '<p style="text-align: start; margin-left: 2rem;">Contando:</p>'
    res.innerHTML += '<p>'

    if (inicial < final)
      for (inicial; inicial <= final; inicial += passo)
        res.innerHTML += `${inicial} &#x1F449; `
    else
      for (inicial; inicial >= final; inicial -= passo)
        res.innerHTML += `${inicial} &#x1F449; `

    res.innerHTML += '&#x1F3C1;</p>'
  }
  else
    res.innerHTML = '<p>Faltam dados..</p>'
}