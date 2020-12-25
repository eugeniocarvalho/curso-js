carregar()

function carregar() {
  const msg = document.querySelector('#msg')
  const img = document.querySelector('#imagem')
  const hora = new Date().getHours()
  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    img.src = 'img/manha.png'
    document.body.style.backgroundColor = '#67b7f6'
  }
  else
    if (hora < 18) {
      img.src = 'img/tarde.png'
      document.body.style.backgroundColor = '#8c3c25'
    }
    else {
      img.src = 'img/noite.png'
      document.body.style.backgroundColor = '#011728'
    }
}
