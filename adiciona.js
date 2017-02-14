var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", function(event){

	event.preventDefault();

	var pacienteNovo = "<tr class='paciente'><td class='info-nome'>Rafael</td>"+
						"<td class='info-peso'>90</td><td class='info-altura'>1.65</td>"+
						"<td class='info-imc'></td></tr>";

	// var tabela = document.getElementsByTagName("table")[0];

	// retorna um array
	//document.querySelectorAll("table");

	//sempre pega o primeiro elemento de varios se houver
	var tabela  = document.querySelector("table");
	tabela.innerHTML = tabela.innerHTML + pacienteNovo;

})