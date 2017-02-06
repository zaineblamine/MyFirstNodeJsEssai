var app=require('./express_app.js').app;

var Monster=require('./db.js').Monster;


/*var monsters=[
	{name: 'Albert', level:3, desc:'la vipére qui désespère'},
	{name: 'Mounir', level:6, desc :'le vamipre qui rend pire'}
];*/

app.get('/',function(req,res){
	res.render('home.jade');
});

app.get('/new_monster',function(req,res){
	res.render('new_monster.jade');
});

app.get('/monsters',function(req,res){
  Monster.find(function(err,monsters){
    if(err){
      console.log(err);
    }
    else{
      res.render('monsters.jade',{monsters:monsters});
    }
  });
});

app.get('/monster/:id2', function(req,res){
   Monster.findById(req.params.id2, function(err,monster){
     if(err){
       console.log(err);
     }
     else {
       res.render('monster.jade',{monster:monster});
     }
   });
 });

app.post('/create_monster',function(req,res){
  var monster= new Monster({
		name: req.body.name,
		desc: req.body.desc,
		level: parseInt(req.body.level, 10)
	});
  monster.save(function(err, monster) {
    if(err){
      console.log(err);
    }else {
     res.send('Monstre crée!');
    }
  });
});

app.listen(8888);
