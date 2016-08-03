var express = require('express');
var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	MongoClient.connect("mongodb://localhost:27017/ag3", function(err, db) {
	assert.equal(null, err);
	experimento_collection = db.collection('experimentos_canonico');
	experimento_collection.find({}).toArray(function(err, experimentos) {
		assert.equal(null, err);
  	res.render('index', { 
  		title: 'AG - Canônico' , 
  		experimentos: JSON.stringify(experimentos),
  		tipo_ag: 1
  	});
  });
		db.close();
	});
});

router.get('/ag_elitismo', function(req, res, next) {
	MongoClient.connect("mongodb://localhost:27017/ag3", function(err, db) {
	assert.equal(null, err);
	experimento_collection = db.collection('experimentos_elitismo');
	experimento_collection.find({}).toArray(function(err, experimentos) {
		assert.equal(null, err);
  	res.render('index', { 
  		title: 'AG - Elitismo' , 
  		experimentos: JSON.stringify(experimentos),
  		tipo_ag: 2
  	});
  });
		db.close();
	});
});

router.get('/ag_normlinear', function(req, res, next) {
	MongoClient.connect("mongodb://localhost:27017/ag3", function(err, db) {
	assert.equal(null, err);
	experimento_collection = db.collection('experimentos_norm_linear');
	experimento_collection.find({}).toArray(function(err, experimentos) {
		assert.equal(null, err);
  	res.render('index', { 
  		title: 'AG - Normalização Linear', 
  		experimentos: JSON.stringify(experimentos),
  		tipo_ag: 3
  	});
  });
		db.close();
	});
});

router.get('/ag_normlinear_elitismo', function(req, res, next) {
	MongoClient.connect("mongodb://localhost:27017/ag3", function(err, db) {
	assert.equal(null, err);
	experimento_collection = db.collection('experimentos_norm_linear_elitismo');
	experimento_collection.find({}).toArray(function(err, experimentos) {
		assert.equal(null, err);
  	res.render('index', { 
  		title: 'AG - Normalização Linear + Elitismo', 
  		experimentos: JSON.stringify(experimentos),
  		tipo_ag: 4
  	});
  });
		db.close();
	});
});

router.get('/ag_canonico_f6modificada', function(req, res, next) {
	MongoClient.connect("mongodb://localhost:27017/ag3", function(err, db) {
	assert.equal(null, err);
	experimento_collection = db.collection('experimentos_canonico_f6modificada');
	experimento_collection.find({}).toArray(function(err, experimentos) {
		assert.equal(null, err);
  	res.render('index', { 
  		title: 'AG - Canônico (f6 + 999)' , 
  		experimentos: JSON.stringify(experimentos),
  		tipo_ag: 5
  	});
  });
		db.close();
	});
});

router.get('/ag_elitismo_f6modificada', function(req, res, next) {
	MongoClient.connect("mongodb://localhost:27017/ag3", function(err, db) {
	assert.equal(null, err);
	experimento_collection = db.collection('experimentos_elitismo_f6modificada');
	experimento_collection.find({}).toArray(function(err, experimentos) {
		assert.equal(null, err);
  	res.render('index', { 
  		title: 'AG - Elitismo (f6 + 999)' , 
  		experimentos: JSON.stringify(experimentos),
  		tipo_ag: 6
  	});
  });
		db.close();
	});
});

module.exports = router;
