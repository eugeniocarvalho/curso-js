let valores = []
res = document.getElementById('res')
resultado = document.getElementById('mostrarResultado')
let resetaValor = document.querySelector('#valor')

function adicionaNumero() {
  let formValor = document.getElementById('valor').value
  const valor = Number(formValor)

  if (formValor.length !== 0)
  if (valor >= 1 && valor <= 100) {
      res.setAttribute("style", "display: block;")

      if (valores.indexOf(valor) === -1) {
        let item = document.createElement('option')
        
        resultado.innerHTML = ''
        item.text 
        valores.push(valor)
        res.value += `Adicionado número ${valor}\n`
      }
      else
        window.alert('Número já adicionado!')
    }
    else
      window.alert('Insira um número entre 0 e 100!')
  else
    window.alert('Insira um número!')
  
  resetaValor.value = ''
  resetaValor.focus()
}

function finalizar() {
  if (valores.length > 0) {
    const maior = Math.max(...valores)
    const menor = Math.min(...valores)
    const soma = valores.reduce((r, i) => r + i)

    resultado.innerHTML = `<p>Ao todo, temos ${valores.length} valores cadastrados</p>
    <p>O maior foi ${maior}</p>
    <p>O menor foi ${menor}</p>
    <p>Somando todos os valores, temos ${soma}</p>
    <p>A média dos valores digitados é ${(soma / valores.length).toFixed(2)}</p>`
  }
  else
    window.alert('Insira um número antes!')

  formValor = ''
}