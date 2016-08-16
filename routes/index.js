var express = require('express');
var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
		title: '' , 
		experimentos: 0,
		tipo_ag: 0
	});

});

routerGetAG('/ag_canonico_c1','ag4_1ponto_corte','experimentos_canonico','AG - Canônico - Um ponto de corte',1);
routerGetAG('/ag_canonico_c2','ag4_2ponto_corte','experimentos_canonico','AG - Canônico - Dois pontos de corte',1);
routerGetAG('/ag_canonico_c3','ag4_uniforme','experimentos_canonico','AG - Canônico - Cruzamento Unifotme',1);

routerGetAG('/ag_elitismo_c1','ag4_1ponto_corte','experimentos_elitismo','AG - Elitismo - Um ponto de corte',1);
routerGetAG('/ag_elitismo_c2','ag4_2ponto_corte','experimentos_elitismo','AG - Elitismo - Dois pontos de corte',1);
routerGetAG('/ag_elitismo_c3','ag4_uniforme','experimentos_elitismo','AG - Elitismo - Cruzamento Unifotme',1);

routerGetAG('/ag_normlinear_c1','ag4_1ponto_corte','experimentos_norm_linear','AG - Normalização Linear - Um ponto de corte',1);
routerGetAG('/ag_normlinear_c2','ag4_2ponto_corte','experimentos_norm_linear','AG - Normalização Linear - Dois pontos de corte',1);
routerGetAG('/ag_normlinear_c3','ag4_uniforme','experimentos_norm_linear','AG - Normalização Linear - Cruzamento Unifotme',1);

routerGetAG('/ag_normlinear_elitismo_c1','ag4_1ponto_corte','experimentos_norm_linear','AG - Normalização Linear/Elitismo- Um ponto de corte',1);
routerGetAG('/ag_normlinear_elitismo_c2','ag4_2ponto_corte','experimentos_norm_linear','AG - Normalização Linear/Elitismo - Dois pontos de corte',1);
routerGetAG('/ag_normlinear_elitismo_c3','ag4_uniforme','experimentos_norm_linear','AG - Normalização Linear/Elitismo - Cruzamento Unifotme',1);

routerGetAG('/ag_canonico_f6aumentada_c1','ag4_1ponto_corte','experimentos_norm_linear','AG - Canônico(F6+999) - Um ponto de corte',1);
routerGetAG('/ag_canonico_f6aumentada_c2','ag4_2ponto_corte','experimentos_norm_linear','AG - Canônico(F6+999) - Dois pontos de corte',1);
routerGetAG('/ag_canonico_f6aumentada_c3','ag4_uniforme','experimentos_norm_linear','AG - Canônico(F6+999) - Cruzamento Unifotme',1);

routerGetAG('/ag_elitismo_f6aumentada_c1','ag4_1ponto_corte','experimentos_elitismo','AG - Elitismo(F6+999) - Um ponto de corte',1);
routerGetAG('/ag_elitismo_f6aumentada_c2','ag4_2ponto_corte','experimentos_elitismo','AG - Elitismo(F6+999) - Dois pontos de corte',1);
routerGetAG('/ag_elitismo_f6aumentada_c3','ag4_uniforme','experimentos_elitismo','AG - Elitismo(F6+999) - Cruzamento Unifotme',1);

router.post('/process_post', urlencodedParser, function (req, res) {
    var tipoag = req.body.tipoag;
    var tipocruzamento = req.body.tipocruzamento;
    
    res.redirect(tipoag+'_'+tipocruzamento);
});

function routerGetAG(url, db, collection, title, tipoag){
	router.get(url, function(req, res, next) {
		MongoClient.connect("mongodb://localhost:27017/"+db, function(err, db) {
		assert.equal(null, err);
		experimento_collection = db.collection(collection);
		experimento_collection.find({}).toArray(function(err, experimentos) {
			assert.equal(null, err);
	  	res.render('index', { 
	  		title: title , 
	  		experimentos: JSON.stringify(experimentos),
	  		tipo_ag: tipoag
	  	});
	  });
			db.close();
		});
	});
}

module.exports = router;
