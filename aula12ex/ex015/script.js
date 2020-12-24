function verifica() {
  const formAno = Number.parseInt(document.getElementById('anonascimento').value)
  const anoAtual = new Date().getFullYear()
  const resultado = document.querySelector('#res')

  if (formAno.length > 0 || formAno < anoAtual) {
    const idade = anoAtual - formAno
    const sexo = document.getElementsByName('gender')

    let sexoAtivo = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    resultado.style.textAlign = 'center'

    if (sexo[0].checked) {
      sexoAtivo = 'm'
      resultado.innerHTML = `Detectamos um homem com ${idade} anos`
    }
    else {
      sexoAtivo = 'f'
      resultado.innerHTML = `Detectamos uma mulher com ${idade} anos`
    }

    if (idade >= 0 && idade < 10)
      img.setAttribute('src', `imgs/foto-bebe-${sexoAtivo}.png`)
    else
      if (idade < 21)
        img.setAttribute('src', `imgs/foto-jovem-${sexoAtivo}.png`)
      else
        if (idade < 50)
          img.setAttribute('src', `imgs/foto-adulto-${sexoAtivo}.png`)
        else
          img.setAttribute('src', `imgs/foto-idoso-${sexoAtivo}.png`)

    resultado.appendChild(img)
  }
  else
    resultado.innerHTML = 'Preenchas os dados corretos acima para ver o resultado!'
}