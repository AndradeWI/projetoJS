// Projeto final da disciplina Linguagem de Script
// Equipe: Aluisio, Alexandre, Rosemberg, Wanderson Andrade
// data: 29/03/2016
// Professor: Daniel 

//carrega  feed da pagina reserva (funcao  mais simples que a do feed do index)
  var request = $.ajax({
  	url: 'http://boiling-taiga-8643.herokuapp.com/index.php?feed=http://rss.home.uol.com.br/index.xml',
  	dataType: 'jsonp'
  });

  request.success(function(response) {
  	var tabela = $("#feed2");
  	for (var i = 0; i < response.channel.item.length;i++) {
  		var item = response.channel.item[i];
  		if (item.title.length > 0) {
  			var noticia = "<tr><td><a target='_blank ' href='"+item.link+"'>" + item.title +"</a></td></tr>";
  			tabela.append(noticia);
  		}
  	}
  });

  request.error(function() {
  	alert("Houve um erro na requisição com o parse do XML");
  });