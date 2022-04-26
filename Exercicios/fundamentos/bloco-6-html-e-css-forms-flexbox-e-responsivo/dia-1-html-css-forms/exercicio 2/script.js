// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

INPUT_TEXT.addEventListener("keypress", function(event){
    if(event.key != "a"){
        event.preventDefault()
    }
})
INPUT_CHECKBOX.addEventListener("click", function(evt){
    evt.preventDefault()
})
HREF_LINK.addEventListener("click", function(evt){
    evt.preventDefault()
})