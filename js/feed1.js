// Projeto final da disciplina Linguagem de Script
// Equipe: Aluisio, Alexandre, Rosemberg, Wanderson Andrade
// data: 29/03/2016
// Professor: Daniel 

// faz a requisicao do xml ao servidor depois formata no jquery.rss.js funcao retirada do git e modificada
jQuery(function($) {
        $("#rss-feeds").rss("http://g1.globo.com/dynamo/rss2.xml", {
          limit: 15,
          effect: 'slideFastSynced'
        })
      });

