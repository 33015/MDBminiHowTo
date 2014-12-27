var mg =require('mongoose');

//verbindung einrichten
mg.connect('mongodb://localhost/neu');
//mg.on('error', return(0));

// datenbankmodell erstellen
var SystemName = mg.model('System',{name: String});

// daten erstellen
var SN = new SystemName({ name: 'F-QQ4N'});

// und daten speihern
SN.save(function(err){
				if(err) {console.log('fehler: ', err);}
				else { console.log('juhu!');}
});

SystemName.find({name: /^F-QQ4N/}, function(err, systeme) {
				if(err) return console.log(err);
				console.log(systeme);
});

