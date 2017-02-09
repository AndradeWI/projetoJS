// Projeto final da disciplina Linguagem de Script
// Equipe: Aluisio, Alexandre, Rosemberg, Wanderson Andrade
// data: 29/03/2016
// Professor: Daniel 

$(function() {

	//Função que adiciona mais Telefone	
	$("#novoFone").on('click', function(e){
		$("#addFone").append("<label for='telefone'>Telefone adicional</label><input class='valid_fone form-control' placeholder='(##)#### - ####'>");
		e.preventDefault();
		return false;
	});
	
		// validacao dos telefones adicionais

 	$("#addFone").each(function(element) {
 		//Dinamicamente fazemos a busca na classe do elemento
 		$(this).on('blur', '.valid_fone', function(elemento) {
 			var Valida_tel = /\([\d]{2}\)(\d{4}|\d{5})-(\d{4})$/;
 			var telefone = $(this).val();

 			if (Valida_tel.test(telefone) == true) {
 				$(this).css("background-color", "white");
 			} else {
 				$(this).css("background-color", "#FF6A62");
 				setTimeout(function(){
 					$(elemento.target).focus();
 				}, 1); 
 			}
 		});
 	});
 		// validacao do telefone para contato do viajante
 	$(".fone1").blur(function(){
 		var Valida_tel = /\([\d]{2}\)(\d{4}|\d{5})-(\d{4})$/;
 		var telefone = $(".fone1").val();

 		if(Valida_tel.test(telefone) == true){
 			$(".fone1").css("background-color", "white");
 		}else{
 			$(".fone1").css("background-color", "#FF6A62");
 			$(".fone1").focus();
 		}
 	});

 	//identificando cartões na página
 	var cartoes = {
 		4984: '../imagens/logo_visa.svg',
 		5256: '../imagens/mastercard.gif',
 		3700: '../imagens/American_Express.png'
 	}

	//Regex com os números, agrupa os 4 primeiros do cartao
	var regex = /(\d{4})[\d]{0,}/;
		// validacao numero do cartao
	$("#num_cartao").blur(function(){
		var numeroValida = /(\d{4})[\d]{0,}/;;
		var numero = $("#num_cartao").val();

		if(numeroValida.test(numero) == true){
			$("#num_cartao").css("background-color", "white");
		}else{
			$("#num_cartao").css("background-color", "#FF6A62");
			$("#num_cartao").focus();
		}
	});


	$("#num_cartao").on('keyup', function() {
		var numeros = $(this).val();
	  //Mostra os grupos que bateram com o regex
	  if (regex.test(numeros)) {
	  	var digitos = numeros.match(regex)[1];
	    //Pegando a div do cartao
	    $("#img_cartao").attr("src", cartoes[digitos]);
	  } else {
	  	$("#img_cartao").attr("src", "../imagens/blank.png");
	  }
	}); //Fim da função cartoes

		// validacao do nome do titular do cartao
	$("#titular_cart").blur(function(){
		var nomeValida = /[a-z]{3,}\s[a-z]{3,}/gmi;
		var nome = $("#titular_cart").val();

		if(nomeValida.test(nome) == true){
			$("#titular_cart").css("background-color", "white");
		}else{
			$("#titular_cart").css("background-color", "#FF6A62");
			$("#titular_cart").focus();
		}
	});



	//Validando data de inicio da reserva
	$("#data_inicio").blur(function(){
		var data = /(^(\d{2}))\/(\d{2})\/(19|20)\d{2,2}$/;
		var valor = $("#data_inicio").val();

		var dataForm = (document.forms[0]["data_inicio"].value).split("/");
		var hoje = new Date();
		var dataInformada = new Date(dataForm[2], dataForm[1]-1, dataForm[0]);

		if(data.test(valor) == true){
		if ( dataInformada > hoje )
		{
			// data maior que a data atual
			$("#data_inicio").css("background-color", "white");
			$("#textoData").hide();
		}
		else if ( hoje.getDate() == dataInformada.getDate() )
		{
			// data informada igual DATA atual
			$("#data_inicio").css("background-color", "#FF6A62").focus();
			$("#textoData").show();	
		}
		else
		{
			//Data  ANTERIOR a data atual
			$("#data_inicio").css("background-color", "#FF6A62").focus();
			$("#textoData").show();	
		}
	}else{
			$("#data_inicio").css("background-color", "#FF6A62").focus();
			$("#textoData").show();	
		};
		
	});

	//Validando data de fim  da reserva
	$("#data_fim").blur(function(){
		var data2 = /(^(\d{2}))\/(\d{2})\/(19|20)\d{2,2}$/;
		var valor2 = $("#data_fim").val();

		var dataForm= (document.forms[0]["data_inicio"].value).split("/");
		var dataInform = new Date(dataForm[2], dataForm[1]-1, dataForm[0]);

		var dataForm2 = (document.forms[0]["data_fim"].value).split("/");
		var dataInform2 = new Date(dataForm2[2], dataForm2[1]-1, dataForm2[0]);

		if(data2.test(valor2) == true){
		if ( dataInform2 > dataInform )
		{
			// data maior que a data inicio
			$("#data_fim").css("background-color", "white");
			$("#textoData").hide();
		}
		else if ( dataInform2.getDate() == dataInform.getDate() )
		{
			// data informada igual DATA inicio
			$("#data_fim").css("background-color", "#FF6A62").focus();
			$("#textoData").show();	
		}
		else
		{
			//Data  ANTERIOR a data inicio
			$("#data_fim").css("background-color", "#FF6A62").focus();
			$("#textoData").show();	
		}
	}else{
			$("#data_fim").css("background-color", "#FF6A62").focus();
			$("#textoData").show();	
		};
		
	});


		// validando data de vencimento do cartao
	$("#validade_cart").blur(function(){
		var dataCart = /^(\d{2})\/(19|20)\d{2,2}$/; // tive bastante dificuldade para fazer um rejex que so aceitase dois digitos no campo dia mais consegui.
		var valcart = $("#validade_cart").val();

		var dataForm = (document.forms[0]["validade_cart"].value).split("/");
		var hoje = new Date();
		var dataInformada = new Date(dataForm[1], dataForm[0]-1);

		if(dataCart.test(valcart) == true){

		if ( dataInformada > hoje )
		{
			// data maior que a data atual
			$("#validade_cart").css("background-color", "white");
			$("#textoData").hide();
		}
		else if ( hoje.getDate() == dataInformada.getDate() )
		{
			// data informada igual DATA atual
			$("#validade_cart").css("background-color", "#FF6A62").focus();
			$("#textoData").show();	
		}
		else
		{
			//Data  ANTERIOR a data atual
			$("#validade_cart").css("background-color", "#FF6A62").focus();
			$("#textoData").show();	
		}
	}else{
			$("#validade_cart").css("background-color", "#FF6A62").focus();
			$("#textoData").show();	
		};
	});

	// validando codigo de seguranca
$("#cod_seg").blur(function(){
 		var numeroValida = /\d/gmi;
 		var numero = $("#cod_seg").val();

 		if(numeroValida.test(numero) == true){
 			$("#cod_seg").css("background-color", "white");
 		}else{
 			$("#cod_seg").css("background-color", "#FF6A62");
 			$("#cod_seg").focus();
 		}
 	});

 	//Abrindo a nova janela com o resumo da reserva
  $("#enviar").on("click", function(event) {

  	var janela = window.open("resumo.html", "", "width=600, height=600");
  	var nome = $("#nome").val();
  	var Rua = $("#rua").val();
  	var Numero = $("#numero").val();
  	var Cep = $("#cep").val();
  	var Contato = $("#fone1").val();
  	var Datainicio = $("#data_inicio").val();
  	var Datafim = $("#data_fim").val();
  	var Transporte = document.getElementById("transp").checked;
  	var Lavanderia = document.getElementById("lav").checked;
  	var valS= $("#suites").val();
  	var valA=$("#adultos").val();
  	var subtotal= parseFloat(valS*valA);
  	var tr=0;
  	var lv=0;

  	var conteudo = "<h1>Resumo da sua reserva</h1>\
  	<p>Titular: " + nome + "</p>\
  	<p>Rua: "+ Rua +"</p>\
  	<p>Número: "+ Numero +"</p>\
  	<p>Cep: "+ Cep +"</p>\
  	<p>Contato: "+ Contato +"</p>\
  	<p>Data inicio da  reserva: "+ Datainicio +"<p>\
  	<p>Data fim da  reserva: "+ Datafim +"<p>\
  	<p> Valor da reserva: R$ " + parseFloat(subtotal.toFixed(2)) + " ,00 </p>";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  	var adicionais = "<h1>Serviços adicionais</h1>";
  	var transpS = "<p>Transporte: (SIM) R$ 250,00 </p>";
  	var lavS = "<p>Lavanderia: (SIM) R$ 200,00</p>";
  	var print = "<br><br><button onclick='window.print()'>Imprimir</button>";

  	janela.document.writeln(conteudo);
  	janela.document.writeln();
  	if (Transporte || Lavanderia) {
  		janela.document.writeln(adicionais);

  		if (Transporte) {
  			 tr= 250.00
  			janela.document.writeln(transpS);
  		}
  		if (Lavanderia) {
  			 lv= 200.00;
  			janela.document.writeln(lavS);
  		}
  			// mostra o valor total (reserva + servicos adicionais caso aja
  		janela.document.writeln("<p>Valor total: R$ "+ (subtotal+tr+lv) + ",00</p>");
  	}

  	janela.document.writeln(print);


  	event.preventDefault();
  });

 	
 	});

