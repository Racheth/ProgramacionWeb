const Types = document.querySelector("[types]");
const Name = document.querySelector("[pokemon]");
const pokeStat = document.querySelector("[stats]");
const Img = document.querySelector("[img]");
const Id = document.querySelector("[id]");


const buscador = event =>{
    event.preventDefault();
    const {value} = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(datos => datos.json())
    .then(response => Pokedatos(response))
    
} 

const Pokedatos = datos =>{
const imgpoke = datos.sprites.front_default;
const{stats, types}= datos;
Name.textContent= datos.name;
Img.setAttribute(`src`, imgpoke);
Id.textContent =`Num .${datos.id}`;
console.log(datos)
poketypess(types);
pokestats(stats);
}

const poketypess = types =>{
    Types.innerHTML='';
types.forEach(type => {
const typeElement =document.createElement("div");
typeElement.textContent=type.type.name;
Types.appendChild(typeElement);
});
}
const pokestats = stats =>{
    pokeStat.innerHTML='';
    stats.forEach(stat => {
const statsls =document.createElement("div");
const statsl =document.createElement("div");
const statsname =document.createElement("div");
statsl.textContent= stat.stat.name;
statsname.textContent= stat.base_stat;
statsls.appendChild(statsl);
statsls.appendChild(statsname);
pokeStat.appendChild(statsls);
}

);
}