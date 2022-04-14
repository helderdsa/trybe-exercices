document.querySelector("#elementoOndeVoceEsta").parentElement.style.color = "red"
document.querySelector("#elementoOndeVoceEsta").firstElementChild.innerHTML = "primeiro filho do filho"
document.querySelector("#pai").firstElementChild.innerHTML = "primeiro filho"
document.querySelector("#elementoOndeVoceEsta").previousElementSibling.style.color = "blue"
console.log(document.querySelector("#elementoOndeVoceEsta").nextSibling);
console.log(document.querySelector("#elementoOndeVoceEsta").nextSibling.nextSibling);
console.log(document.querySelector("#pai").childNodes[document.querySelector("#pai").childNodes.length-2]);

