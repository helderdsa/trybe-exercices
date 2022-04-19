function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let diasCalend = document.querySelector("#days")
for (index of dezDaysList) {
    let dia = document.createElement("li")
    dia.innerHTML = index
    dia.className = "day"
    if (index == 24 || index == 25 || index == 31) {
        dia.className += " holiday"
    } if (index == 4 || index == 11 || index == 18 || index == 25) {
        dia.className += " friday"
    }
    diasCalend.appendChild(dia)
}

////////////////////////////////////////////////////////////////////////////////

window.onload = criarBTNFeriado("Feriados")
function criarBTNFeriado(textoBTN) {
    btnFeriado = document.createElement("button")
    btnFeriado.id = "btn-holiday"
    btnFeriado.innerHTML = textoBTN
    document.querySelector(".buttons-container").appendChild(btnFeriado)
}

////////////////////////////////////////////////////////////////////////////////

let feriadosToggle = false
function destacarFeriados() {
    let feriados = document.querySelectorAll(".holiday")
    if (feriadosToggle == false) {
        for (feriado of feriados) {
            feriado.style.backgroundColor = "#2fc18c"
            feriado.style.color = "black"
            feriadosToggle = true
        }
    } else {
        for (feriado of feriados) {
            feriado.style.backgroundColor = "#eeeeee"
            feriado.style.color = "#777"
            feriadosToggle = false
        }
    }
}
document.querySelector("#btn-holiday").addEventListener("click", destacarFeriados)

////////////////////////////////////////////////////////////////////////////////

window.onload = criarBTNSexta("Sexta-Feira")
function criarBTNSexta(textoBTN) {
    btnSexta = document.createElement("button")
    btnSexta.id = "btn-friday"
    btnSexta.innerHTML = textoBTN
    document.querySelector(".buttons-container").appendChild(btnSexta)
}

let sextasToggle = false
function destacarSextas(){
    let sextas = document.querySelectorAll(".friday")
    let diasSextaDez = [ 4, 11, 18, 25 ]
    let index = 0
    if(sextasToggle == false){
        for(sexta of sextas){
            sexta.style.backgroundColor = "red"
            sexta.style.color = "black"
            sexta.innerHTML = ">>"+sexta.innerHTML+"<<"
            sextasToggle = true
        }
    }else{
        for(sexta of sextas){
            sexta.style.backgroundColor = "#eeeeee"
            sexta.style.color = "#777"
            sexta.innerHTML = diasSextaDez[index]
            index++
            sextasToggle = false
        }
    }
}
document.querySelector("#btn-friday").addEventListener("click", destacarSextas)

////////////////////////////////////////////////////////////////////////////////

let dias = document.querySelectorAll(".day")
function overData(evt){
    evt.target.style.fontSize = "24px"
    evt.target.style.color = "#2fc18c"
}

function leaveData(evt){
    evt.target.style.fontSize = "20px"
    evt.target.style.color = "#777"
}

for(dia of dias){
    dia.addEventListener("mouseover", overData, false)
    dia.addEventListener("mouseleave", leaveData, false)
}