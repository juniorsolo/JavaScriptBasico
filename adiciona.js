var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", function(event){

	event.preventDefault();

	var campoNome = document.querySelector("#campo-nome");
	var campoPeso = document.querySelector("#campo-peso");
	var campoAltura = document.querySelector("#campo-altura");


	var pacienteNovo = "<tr class='paciente'>"+
						"<td class='info-nome'>" + campoNome.value + "</td>"+
						"<td class='info-peso'>" + campoPeso.value + "</td>"+
						"<td class='info-altura'>" + campoAltura.value + "</td>"+
						"<td class='info-imc'></td></tr>";

	// var tabela = document.getElementsByTagName("table")[0];

	//document.querySelectorAll("table"); retorna um array

	//sempre pega o primeiro elemento de varios se houver
	var tabela  = document.querySelector("table");
	tabela.innerHTML = tabela.innerHTML + pacienteNovo;
    
    //Limpa campos

    campoNome.value = "";
    campoPeso.value = "";
    campoAltura.value = "";
})