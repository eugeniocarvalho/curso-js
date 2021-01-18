carregar()

function carregar() {
  const msg = document.querySelector('#msg')
  const img = document.querySelector('#imagem')
  const hour = new Date().getHours()

  function showTime() {
    let time = new Date();

    return time.toLocaleTimeString('pt-br', {
      hour12: false
    });
  }

  setInterval(()=> {
    msg.innerHTML = `Agora são <b>${showTime()}</b>`;
  }, 1000);

  if (hour >= 0 && hour < 12) {
    img.src = 'img/manha.png'
    document.body.style.backgroundColor = '#67b7f6'
  } else
  if (hour < 18) {
    img.src = 'img/tarde.png'
    document.body.style.backgroundColor = '#8c3c25'
  } else {
    img.src = 'img/noite.png'
    document.body.style.backgroundColor = '#011728'
  }
}