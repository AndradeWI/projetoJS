// Projeto final da disciplina Linguagem de Script
// Equipe: Aluisio, Alexandre, Rosemberg, Wanderson Andrade
// data: 29/03/2016
// Professor: Daniel 

// validacao dos dados do cliente//
function validarNome(){
	regNome = /[A-Z]([a-z])+\s[A-Z]([a-z])+\s?/;
	valorNome = document.getElementById('nome').value;
	teste = regNome.test(valorNome);
	
	if(!teste){
		document.getElementById('nome').focus();
		document.getElementById('nome').style.backgroundColor = "red";
	}
	else{
		document.getElementById('nome').style.backgroundColor = "white";
	}
}
 // valida nome da rua
function validarRua(){
	regRua = /\w+/;
	valorRua = document.getElementById('rua').value;
	teste = regRua.test(valorRua);
	
	if(!teste){
		document.getElementById('rua').focus();
		document.getElementById('rua').style.backgroundColor = "red";
	}
	else{
		document.getElementById('rua').style.backgroundColor = "white";
	}
}
 // valida numero da casa
function validarNumero(){
	regNumero = /\d+\s?/;
	valorNumero = document.getElementById('numero').value;
	teste = regNumero.test(valorNumero);
	
	if(!teste){
		document.getElementById('numero').focus();
		document.getElementById('numero').style.backgroundColor = "red";
	}
	else{
		document.getElementById('numero').style.backgroundColor = "white";
	}
}

	// valida cep
function validarCep(){
	regCep = /\d{5}-\d{3}/;
	valorCep = document.getElementById('cep').value;
	teste = regCep.test(valorCep);
	
	if(!teste){
		document.getElementById('cep').focus();
		document.getElementById('cep').style.backgroundColor = "red";
	}
	else{
		document.getElementById('cep').style.backgroundColor = "white";
	}
 }


 // funcao carregar as cidades por estado
function criarCidades(valor){
	cidades = new Array();
	cidades['0'] = ['JOÃO PESSOA', 'CAMPINA GRANDE', 'PATOS', 'CAJAZEIRAS'];
	cidades['1'] = ['RECIFE', 'OLINDA', 'JABOATÃO'];
	cidades['2'] = ['RIO DE JANEIRO', 'ANGRA DOS REIS', 'NITEROI', 'RIO DAS OSTRAS'];
	cidades['3'] = ['NATAL', 'MOSSORO', 'ALEXANDRINA'];
	cidades['4'] = ['SÃO PAULO', 'OSASCO', 'GUARULHOS'];
	
	cidades[valor.value].sort();
	inner = "";

	for( i = 0; i < cidades[valor.value].length; i++ ){
		inner += "<option>"+cidades[valor.value][i]+"</option>";
		document.getElementById('cidades').innerHTML = inner;
	}

}






 

