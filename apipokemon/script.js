const pokeCard = document.querySelector("[datos-card]");
const pokeName = document.querySelector("[datos-pokemon]");
const pokeImg = document.querySelector("[datos-img]");
const pokeContainer = document.querySelector("[datos-poke-img]");
const pokeId = document.querySelector("[datos-id]");
const pokeTypes = document.querySelector("[datos-types]");
const pokeStats = document.querySelector("[datos-stats]");

const buscador = event =>{
    event.preventDefault();
    const {value} = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(datos => datos.json())
    .then(response => Pokedatos(response))
} 

const Pokedatos = datos =>{
const{stats, types}= datos;
console.log(datos)
pokeName.textContent= datos.name;
pokeImg.setAttribute("src",datos.sprites.front_default);
pokeId.textContent =`Num .${datos.id}`;
}


