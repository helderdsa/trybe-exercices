info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log("Olá "+info.personagem)
  info.recorrente = 'Sim'
  console.log(info)
  for(infos in info){
      console.log(info[infos])
  }
let info2 = {
    personagem:'Tio Patinhas',
    origem:'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota:'O último MacPatinhas',
    recorrente:'Sim',
}
console.log(info.personagem+" e "+info2.personagem )
console.log(info.origem+" e "+info2.origem )
console.log(info.nota+" e "+info2.nota )
if(info.recorrente == 'Sim' && info2.recorrente == 'Sim'){
    console.log("ambos recorentes")
}else if(info.recorrente == 'Sim' && info2.recorrente != 'Sim'){
    console.log("apenas "+info.personagem+" é recorrente")
}else if(info.recorrente != 'Sim' && info2.recorrente == 'Sim'){
    console.log("apenas "+info2.personagem+" é recorrente")
}else(
    console.log("nenhum é recorrente")
)