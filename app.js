var express = require('express')
var app = express()
var path=require('path')
var bodyParser = require('body-parser');
var db = require('./db.js');
var comment = require('./comments.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',function(req,res,next){
    db.find({}, function(err, data){
        res.render('home',{ 
            cities: ["Coimbatore","Chennai","Madurai","Salem"],
            restaurent:data
         });
    });
});
app.post('/PostHotel',function(req, res){
    db.create({
        name: req.body.name,
        type:req.body.type,
        city:req.body.city,
        rating:req.body.rating
    }, function (err, small) {
        if (err) console.log('Error' + err);
    
    });
    res.redirect('/');
});
app.post('/postComment',function(req, res){
    comment.create({
        hotelName: req.body.name,
        text: req.body.text
    }, function (err, small) {
        if (err) console.log('Error' + err);
    
    });
    res.redirect('/restaurents/'+req.body.name);
});

app.get('/restaurents/:HotelName',function(req,res,next){
    comment.find({hotelName: req.params.HotelName.trim()}, function(err, data){
        console.log(req.params.HotelName);
        res.render('index',{
            data:data,
            hotelName: req.params.HotelName.trim()
        });
    });
});

app.get('/form',function(req,res,next){
    db.find({}, function(err, data){
        res.render('form',{
            data:data
        });
    });
});
// app.get('/display',function(req,res){
    
//  });

app.use('/routing', express.static(path.join(__dirname, 'routing')))
app.listen(3000);
console.log("Server listening at 127.0.0.1:3000");