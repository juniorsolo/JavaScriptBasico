// var tdPeso1 = document.getElementById("peso-1");
// var tdAltura1 = document.getElementById("altura-1");

// var paciente1 = {"peso": tdPeso1.textContent, "altura": tdAltura1.textContent};


// var tdPeso2 = document.getElementById("peso-2");
// var tdAltura2 = document.getElementById("altura-2");

// var paciente2 = {"peso": tdPeso2.textContent, "altura": tdAltura2.textContent};

// var pacientes = {paciente1, paciente2};

var trsPacientes = document.getElementsByClassName("paciente");

for(var posicaoAtual = 0 ; posicaoAtual < trsPacientes.length ; posicaoAtual++){

	var pacienteTr = trsPacientes[posicaoAtual];
    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];

	var paciente = {nome: tdNome.textContent, peso: tdPeso.textContent, altura: tdAltura.textContent }; 

	if(paciente.altura != 0){
	   var imc = paciente.peso / (paciente.altura * paciente.altura);
	   tdImc.textContent = imc;
	   console.log(imc);

	}
}