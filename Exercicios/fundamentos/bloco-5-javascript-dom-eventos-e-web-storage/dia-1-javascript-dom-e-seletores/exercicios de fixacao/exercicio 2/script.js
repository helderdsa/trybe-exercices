document.querySelector("#header-container").style.color = "white"
document.querySelector("#header-container").style.backgroundColor = "green"

let emergencyTasks = document.querySelectorAll(".emergency-tasks div")
for(elemento of emergencyTasks){
    elemento.style.backgroundColor = "tomato"
}

let emergencyTasksTitle = document.querySelectorAll(".emergency-tasks div h3")
for(elemento of emergencyTasksTitle){
    elemento.style.backgroundColor = "magenta"
}

let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks div")
for(elemento of noEmergencyTasks){
    elemento.style.backgroundColor = "yellow"
}

let noEmergencyTasksTitle = document.querySelectorAll(".no-emergency-tasks div h3")
for(elemento of noEmergencyTasksTitle){
    elemento.style.backgroundColor = "black"
}

let footer = document.querySelector("footer div")
footer.style.backgroundColor = "darkgreen"
footer.style.color = "white"
footer.style.padding = "16px"