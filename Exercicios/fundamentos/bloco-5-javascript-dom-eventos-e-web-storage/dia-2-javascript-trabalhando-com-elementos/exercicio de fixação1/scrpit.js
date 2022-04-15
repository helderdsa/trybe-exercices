document.querySelector("#elementoOndeVoceEsta").parentElement.style.color = "red"
document.querySelector("#elementoOndeVoceEsta").firstElementChild.innerHTML = "--primeiro filho do filho"
document.querySelector("#pai").firstElementChild.innerHTML = "primeiro filho"
document.querySelector("#elementoOndeVoceEsta").previousElementSibling.style.color = "blue"
console.log(document.querySelector("#elementoOndeVoceEsta").nextSibling);
console.log(document.querySelector("#elementoOndeVoceEsta").nextSibling.nextSibling);
console.log(document.querySelector("#pai").childNodes[document.querySelector("#pai").childNodes.length-4]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

let pai = document.querySelector("#pai")
let irmao = document.createElement("section")
irmao.innerHTML = "helder"
pai.appendChild(irmao)

let ondeVE = document.querySelector("#elementoOndeVoceEsta")
let filhoOnde = document.createElement("div")
filhoOnde.innerHTML = "--opa, sou o filho"
ondeVE.appendChild(filhoOnde)

let primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho")
let filhoDoFilho = document.createElement("div")
filhoDoFilho.innerHTML = "---eu sou filho do filho"
let filhoDoFilhoID = document.createAttribute("id")
filhoDoFilhoID.value = "filhoDoFilho"
filhoDoFilho.setAttributeNode(filhoDoFilhoID)
primeiroFilhoDoFilho.appendChild(filhoDoFilho)

///////////////////////////////////////////////////////////////////////////////////////////////////////////

