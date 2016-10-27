var express = require('express');
var mongojs = require("mongojs");
var router = express.Router({ strict: true, 
                              caseSensitive : true});
var fs = require('fs');

var url = process.env.PROD_MONGODB;
var db = mongojs(url);

db.on('error', function (err) {
    console.log('database error', err)
})

db.on('connect', function () {
    console.log('database connected')
})


/* GET home page. */

router.post('/api/item', (req, res) => {

    db.collection('items').insert(req.body,(erro, data) => {
        res.json({ "data" :  data });
    });

});

router.put('/api/item', (req, res) => {

    var data = req.body;
    data._id = mongojs.ObjectId(data._id);
    db.collection('items').save(req.body,(erro, data) => {
        res.json({ "data" :  data });
    });

});

router.get('/api/item/:id', (req, res) => {

    db.collection('items').findOne({_id: mongojs.ObjectId(req.params['id'])},(err, data) => {
        res.json({ "data" :  data });
    });
});

router.get('/api/items', (req, res) => {

    db.collection('items').find({}).toArray((err, data) => {
        res.json({ "data" :  data });
    });

});

router.get('/api/search/:term*?', (req, res) => {
    var term = req.params['term'];
    var param = {};
    if (term){
        param = {title:{$regex : term, $options : 'i' }};
    }
    db.collection('items').find(param).toArray((err, data) => {
        res.json({ "data" :  data });
    });

});

router.delete('/api/item/:id', (req, res) => {

    db.collection('items').remove({_id: mongojs.ObjectId(req.params['id'])},(err, data) => {
        res.json({ "data" :  data });
    });
});

router.get('/api/db', (req, res) => {
    db = mongojs(url);
    res.end(db.toString());
});


function cleanup() {
  console.log('closing DB ...');
    if (db){
        db.close();
        console.log('DB Connection Closed!...');
    }
    process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);


module.exports = router;
