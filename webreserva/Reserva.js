function clicNom() {
 formulari.Nom.value="";
}
//Quan fem clic al nom el valor que hi ha s'esborra.
function surtnom() {
 let m=false;
 let n = formulari.Nom.value.length;
 if(formulari.Nom.value!="Escriu el teu nom"){
   for(let i=0 ; i<n ; i++){
     if(formulari.Nom.value[i]==" "){
       m=true;
    }
   }
 }
  if(m==false){
    formulari.Nom.style.borderColor = "red";
    document.getElementById("inc1").innerHTML="* Nom incorrecte cal com a mínim dos paraules"
  }else{
    formulari.Nom.style.borderColor = "green";
    document.getElementById("inc1").innerHTML="";
  }
  return(m);
  }
//Quan sortim del nom si el nom si hem escrit alguna cosa comprova que hi hagi un espai en blanc.
//Si l'hem escrit malament posarà la linia de fora en vermell i escriurà una frase.Si esta bé es posarà en verd.



function surtpais(){
  let z=false;
  if(formulari.paisos.value=="buit"){
  document.getElementById("inc8").innerHTML="* Has d'escollir una opció";
  }else{
   z=true;
  } 
  return (z);
}
function surtciutat(){
  let z=false;
  if(formulari.ciutats.value=="buit"){
  document.getElementById("inc8").innerHTML="* Has d'escollir una opció";
  }else{
   z=true;
  }
    return (z);
}

//(Les dos funcions)Si surtim de escollir algun pais o ciutat sense fer clic a ninguna opció indicara en vermell que no ho hem fet.

function pais(){
  document.getElementById("inc8").innerHTML="";
}
function ciutat(){
  document.getElementById("inc8").innerHTML="";
}





function clicDNI() {
  formulari.Dni.value = "";
}
//Borra el que està possat a on s'escriu el dni o nie

function surtdni(){
   let a ="Mal";
   let b ="0123456789"
   let c=formulari.Dni.value.length;
  for(let k=0;k<b.length;k++){
    if(formulari.Dni.value[0]==b[k]){
       a="DNI"
    }else if(formulari.Dni.value[0]=="Y" || formulari.Dni.value[0]=="X" || formulari.Dni.value[0]=="Z"){
       a="NIE";
   }
  }
  
  if(a=="Mal"){
    formulari.dni.style.borderColor = "red";
    document.getElementById("inc2").innerHTML="* Has d'escriure un DNI o NIU"
  }else{
     formulari.dni.style.borderColor = "green";
     document.getElementById("inc2").innerHTML="";
  }
  
  return(a);
}
//Comprova si la primera lletra que hem escrit es un XYZ o un numero y amb això deixarà veure les ciutats o els països en el camp següent.
//Si l'hem escrit malament posarà la linia de fora en vermell i escriurà una frase.Si esta bé es posarà en verd.




function clickCom(){
  formulari.comentaris.value="";
  document.getElementById("comen").innerHTML="";
  document.getElementById("inc6").innerHTML="";
  }
//Quan fem clic al comentari borra la frase que conta paraules si ya l'hem utilitzat i també la frase vermella quan el deixem en blanc.

function teclacom(){
  let n=0;
  let b=formulari.comentaris.value.length+1;
  document.getElementById("comen").innerHTML="Portes "+b+" caràcters";
} 
//Quan fem clic a una lletra del teclat la funció torna a començar conta quant caràcters portes.

function surtcom(){
  formulari.com.style.borderColor = "green";
  document.getElementById("inc6").innerHTML="";
  
 
}






function executar(){

let x=surtnom();
let y=surtdni();

let i=surtcom();
let a=surtpais();

  

if(x==false || y=="Mal" || i==false || a==false ){
document.getElementById("inc5").innerHTML="* Recorda! Has d'omplir tots els camps."
}else{
  document.getElementById("inc5").innerHTML=""
  alert("Tot esta correcte  -----> Enviant...");
}
if(a==true || s==true){
  document.getElementById("inc8").innerHTML=""
}
}
//Torna a cridara a totes les funcions per comprovar que no hem deixat ninguna malament o sense clicar.
//Si hi ha alguna que no és correcte ho indicarà en vermell.
//Si tot està bé farà un alert.