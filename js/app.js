


$(document).ready(function(){

    var apprenants = ["Florian","Maxime","Jordy","Mouad","Raphael","Marco","Grégory","Morel","Océane","Emile","Dimitri","Julien","Elodie","Franck","Romain"];

    var tables = ["table 1","table 2","table 3","table 4","table 5"];

    var numeroTable= 1;



   function shuffle(apprenants) {
		var j, x, i;
		for (i = apprenants.length; i; i--) {
			j = Math.floor(Math.random() * i);
			x = apprenants[i - 1];
			apprenants[i - 1] = apprenants[j];
			apprenants[j] = x;
		}
	}
    

    $("#lancer").click(function(){

		console.log(apprenants);
		shuffle(apprenants);
		console.log(apprenants);


		for (var i = 0 ; i < apprenants.length  ; i++) {
			var nomApprenants = apprenants[i];
			console.log(apprenants[i] + " à la table " + numeroTable);

			if ( numeroTable >= 5 ){
				numeroTable = 1;
			}
			else{ 
				numeroTable++;
			}
       $("#ajout").append('<tr><td>' + nomApprenants + '</td><td>' + numeroTable +  '</td></tr>');
		}
    	
	});

	$("#vider").click(function(){
		$("#ajout").html("");
	});


});

    	


       




 















