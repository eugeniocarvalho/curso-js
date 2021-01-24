const exercisesContents = [{
  name: 'Exercício 01 - Olá mundo!',
  url: 'exercicios/aula04/ex001.html',
  src: 'exercicios/img/ex1.png'
}, {
  name: 'Exercício 02 - Olá mundo! v.2',
  url: 'exercicios/aula06/ex002.html',
  src: 'exercicios/img/ex2.png'
}, {
  name: 'Exercício 03 - Soma de números',
  url: 'exercicios/aula06/ex003.html',
  src: 'exercicios/img/ex3.png'
}, {
  name: 'Exercício 04 - Curiosidades nome',
  url: 'exercicios/aula06/ex004.html',
  src: 'exercicios/img/ex4.png'
}, {
  name: 'Exercício 05 - Primeiros passos com o DOM',
  url: 'exercicios/aula09/ex005.html',
  src: 'exercicios/img/ex5.png'
}, {
  name: 'Exercício 06 - Eventos DOM',
  url: 'exercicios/aula10/ex006.html',
  src: 'exercicios/img/ex6.png'
}, {
  name: 'Exercício 07 - Somando números v.2',
  url: 'exercicios/aula10/ex007.html',
  src: 'exercicios/img/ex7.png'
}, {
  name: 'Exercício 08 - Sistema de Multas',
  url: 'exercicios/aula11/ex008.html',
  src: 'exercicios/img/ex8.png'
}, {
  name: 'Exercício 09 - Nacionalidade',
  url: 'exercicios/aula11/ex009.html',
  src: 'exercicios/img/ex9.png'
}, {
  name: 'Exercício 14 - Hora do dia',
  url: 'exercicios/aula12ex/ex014/index.html',
  src: 'exercicios/img/ex14.png'
}, {
  name: 'Exercício 14 - Hora do dia 2.0',
  url: 'exercicios/aula12ex/ex014b/index.html',
  src: 'exercicios/img/ex14b.png'
}, {
  name: 'Exercício 15 - Verificador de Idade',
  url: 'exercicios/aula12ex/ex015/index.html',
  src: 'exercicios/img/ex15.png'
}, {
  name: 'Exercício 16 - Super contador',
  url: 'exercicios/aula14ex/ex016/index.html',
  src: 'exercicios/img/ex16.png'
}, {
  name: 'Exercício 17 - Tabuada',
  url: 'exercicios/aula14ex/ex017/index.html',
  src: 'exercicios/img/ex17.png'
}, {
  name: 'Exercício 18 - Analisador de números',
  url: 'exercicios/aula16ex/ex18/index.html',
  src: 'exercicios/img/ex18.png'
}];
const challengesContents = [{
  name: 'Desafio 1 - Desafio das mensagens',
  url: 'desafios/d001.html',
  src: 'desafios/img/d1.png'
}, {
  name: 'Desafio 2 - Desafio boas-vindas',
  url: 'desafios/d002.html',
  src: 'desafios/img/d2.png'
}, {
  name: 'Desafio 3 - Antes e Depois',
  url: 'desafios/d003.html',
  src: 'desafios/img/d3.png'
}, {
  name: 'Desafio 4 - Calcula troco',
  url: 'desafios/d004.html',
  src: 'desafios/img/d4.png'
}, {
  name: 'Desafio 5 - Conversor de medidas',
  url: 'desafios/d005.html',
  src: 'desafios/img/d5.png'
}, {
  name: 'Desafio 6 - Conversor de Temperaturas',
  url: 'desafios/d006.html',
  src: 'desafios/img/d6.png'
}, {
  name: 'Desafio 7 - Conversor R$ ⇾ US$',
  url: 'desafios/d007.html',
  src: 'desafios/img/d7.png'
}, {
  name: 'Desafio 8 - Cálculo de desconto',
  url: 'desafios/d008.html',
  src: 'desafios/img/d8.png'
}, {
  name: 'Desafio 9 - Reajuste Salarial',
  url: 'desafios/d009.html',
  src: 'desafios/img/d9.png'
}, {
  name: 'Desafio 10 - Fórmula de Bhaskara',
  url: 'desafios/d010.html',
  src: 'desafios/img/d10.png'
}, {
  name: 'Desafio 11 - Ano Bissexto',
  url: 'desafios/d011.html',
  src: 'desafios/img/d11.png'
}, {
  name: 'Desafio 12 - Preço antes, preço depois',
  url: 'desafios/d012.html',
  src: 'desafios/img/d12.png'
}, {
  name: 'Desafio 13 - Situação do aluno',
  url: 'desafios/d013.html',
  src: 'desafios/img/d13.png'
}]
const res = document.querySelector('#resExercises');
const res2 = document.querySelector('#resChallenges')

for (let i of exercisesContents) {
  const createCard = document.createElement('div');
  const article = document.createElement('article');
  const divImg = document.createElement('div');
  const divContent = document.createElement('div');

  createCard.setAttribute('class', 'l-cards');
  article.setAttribute('class', 'c-card');
  divImg.setAttribute('class', 'card-img');
  divContent.setAttribute('class', 'content');

  divImg.innerHTML = `<a href="${i.url}"><img src="${i.src}" alt="Image Placeholder" width="100%"></img></a>`
  article.appendChild(divImg)

  divContent.innerHTML = `<span>${i.name}</span>`
  article.appendChild(divContent)
  createCard.appendChild(article);
  res.appendChild(createCard);
}

for (let i of challengesContents) {
  const createCard = document.createElement('div');
  const article = document.createElement('article');
  const divImg = document.createElement('div');
  const divContent = document.createElement('div');

  createCard.setAttribute('class', 'l-cards');
  article.setAttribute('class', 'c-card');
  divImg.setAttribute('class', 'card-img');
  divContent.setAttribute('class', 'content');

  divImg.innerHTML = `<a href="${i.url}"><img src="${i.src}" alt="Image Placeholder" width="100%"></img></a>`;
  article.appendChild(divImg);

  divContent.innerHTML = `<span>${i.name}</span>`;
  article.appendChild(divContent);
  createCard.appendChild(article);
  res2.appendChild(createCard);
}