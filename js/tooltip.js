// Projeto final da disciplina Linguagem de Script
// Equipe: Aluisio, Alexandre, Rosemberg, Wanderson Andrade
// data: 29/03/2016
// Professor: Daniel 
// funcao para  criar a caixa de texto nos servicos adicionais
$(function() {
		var tooltips = $( "[title]" ).tooltip({
			position: {
				my: "left top",
				at: "right+5 top-5"
			}
		});
		$( )
			.button()
			.click(function() {
				tooltips.tooltip( "open" );
			})
			.insertAfter( "form" );
	});