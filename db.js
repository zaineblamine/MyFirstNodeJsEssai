var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/monsters');

var db=mongoose.connection;

db.on('error',function(error){
	console.log('DB connection error!');
  console.log(error);
});
db.on('open',function(){
	console.log('DB connection success!');
});

var monsterShema= mongoose.Schema({
  name: String,
  level: Number,
  desc: String
});

var Monster=mongoose.model('Monster',monsterShema);

exports.Monster=Monster;
