const myButton = document.getElementById("btnClick");
const myUl = document.getElementById("contenedor");
const liReferences = [];
let contador = 1;



myButton.onclick = (event) => {
  const miLi =  document.createElement("li");
  const button = document.createElement('button'); 
  button.type = 'button'; 
  miLi.id=contador;
  miLi.innerHTML = `Elemento lista #${contador}`+"<button onClick='remover(this)'>remove</button>"
  ;
  liReferences.push(miLi);
  myUl.appendChild(miLi);
  contador++;
}
  function remover(elemento){
      var id = elemento.parentNode.getAttribute("id");
      nodo=document.getElementById(id);
      nodo.parentNode.removeChild(nodo);
  }