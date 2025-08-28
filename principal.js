//esse bloco vai alterar o nome do titulo e subtitulo
var pacientes = document.querySelector(".titulo-segundario");
var titulo = document.querySelector(".titulo");
pacientes.textcontent = "meus pacientes";
pacientes.textcontent = " Lima nutri";

//esse vai criar variavel buscar id do primeiro paciente e acessa o peso do primeiro paciente
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//buscar o elemento da altura e altera seu centeudo
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//calcule o IMC e altera no elemento
var IMC = peso / (altura * altura);

//valores booleanos
var pesoValido = true;
var alturaValida = true;

//alerta caso peso e altura sejam invalido
if(peso<= 0 || peso >= 1000){
  var pesoValido = false;
  alert("peso invalido");
}
if(altura <= 0 || altura >= 2.50){
  var  alturaValida = false;
   alert("altura invalida");
}

if(pesoValido && alturaValida){
  var tdIMC = paciente.querySelector(".info-imc");
    tdIMC.textContent = IMC;


}









