const image = [
  {
    nome: 'Argentina',
    descrizione: 'Lorem ipsum dolor sit, amet consectet.',
    immagine: 'argentina.jpg'
  },
  {
    nome: 'Chile',
    descrizione: 'Lorem ipsum dolor sit, amet consectet.',
    immagine: 'chile.jpg'
  },
  {
    nome: 'Colombia',
    descrizione: 'Lorem ipsum dolor sit, amet consectet.',
    immagine: 'colombia.jpg'
  },
  {
    nome: 'Perù',
    descrizione: 'Lorem ipsum dolor sit, amet consectet.',
    immagine: 'peru.jpg'
  },
  {
    nome: 'Svezia',
    descrizione: 'Lorem ipsum dolor sit, amet consectet.',
    immagine: 'svezia.jpg'
  }
]

const wrap = document.querySelector('.wrap');
const thumb = document.querySelector('.thumb');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const wrapper = document.querySelector('.wrapper');

let counterImages = 0;


image.forEach(slide => {
  
  let firstImage = `
  <div class="wrap">
    <h2>${slide.nome}</h2>
    <p>${slide.descrizione}</p>
    <img src="assets/img/${slide.immagine}" alt="${slide.nome}">
  </div>`;

  wrapper.innerHTML = firstImage;

  let secondImage = `
    <img src="assets/img/${slide.immagine}" 
    alt="${slide.nome}">`;

  thumb.innerHTML = secondImage;
});