function calculaTodosImcs(){
	var trsPacientes = document.getElementsByClassName("paciente");

percorreArray(trsPacientes, function(pacienteTr){

	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];

	var pacienteAtual = {nome: tdNome.textContent,
	                     peso: tdPeso.textContent,
	                     altura: tdAltura.textContent,
	                     pegaImc:  function(){
	                      	if(this.altura != 0){
							   var imc =  this.peso / (this.altura * this.altura);
							   console.log(imc);
							   return imc;

							}else{
								console.log("Não é possível dividir por zero.");
							}

	                     }
	                  }; 
    
    tdImc.textContent = pacienteAtual.pegaImc();
});
}


 var botao = document.getElementById("calcula-imcs");
// desta foma não da pra colocar 2 eventos onclick, sempre ira pega o ultimo
// botao.onclick = calculaTodosImcs;

botao.addEventListener("click",calculaTodosImcs);
botao.addEventListener("click",function(){
	console.log("Calculando imcs...");
})