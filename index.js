const url = 'https://dog.ceo/api/breeds/image/random';
const button = document.querySelector('#random-dog');
const div = document.querySelector('#dog');

async function randomDog() {
  const response = await fetch(url); // aguarda retorno da requisição da url
  const dog = await response.json();
  const img = document.createElement('img');
  div.innerHTML = '';

  img.src = dog.message;

  div.appendChild(img);

  return dog;
}

button.onclick = () => randomDog();
