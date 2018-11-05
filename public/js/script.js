$(document).ready(function() {
	var flag=0;
	$.ajax ({
			type: 'POST',
			url: '/checkbooked',
		   	data: {},
            // id='#'+id,
			success: function(data) {
				for(var i in data){
					console.log(data[i].slotId+"     break     ");
					 var xx = document.getElementById(data[i].slotId);
         xx.style.backgroundColor = "blue";
				}
			},
			error: function(data) {
				console.log('Error Occured bro!');
			}
		});

	///sdfg
	$('.admin').click(function() {
	
// var db = require('./db')(app);
var idx=$(this).attr('id');
var xx = document.getElementById(idx);

        if( xx.style.backgroundColor == "blue")
	     $.ajax ({
			type: 'POST',
			url: '/change-status',
		   	data: {ide : idx, status: 'red'},
            // id='#'+id,
			success: function(data) {
				 var x = document.getElementById("alertx");
        		x.style.display = "block";
				//alert("Your Slot is Booked!!!!!");
				console.log('admin ki jai ho!');
						},
						error: function(data) {
						console.log('admin ghnta!');
			        }
		       });
        });
///sdfghsdfgh



	$('.slot').click(function() {
		//console.log("asdf");
// var db = require('./db')(app);

		function checkone(cid){
         flag=0;
    	for(var i=1; i<=24; i++){
        	var  cid='a'+i;
        		 var xx = document.getElementById(cid);
         if(xx.style.backgroundColor == "red" )
             flag=1;
    	}
    	
        		 var xx = document.getElementById(cid);
         if(xx.style.backgroundColor == 'blue' )
             console.log("qwerty");
    	// var ide = $(this).attr('id');
    	// var idd = document.getElementById(ide);
    	
    	return flag;
	}

	      if(checkone($(this).attr('id'))==0)
	      {
		var id = $(this).attr('id');
		var  cid='';
        		 var xx = document.getElementById(id);
         if(xx.style.backgroundColor == 'blue' )
             flag=2;
         else{
	    this.style.backgroundColor = 'red';
		console.log($(this).attr('id'));
		$.ajax ({
			type: 'POST',
			url: '/book-slot',
		   	data: {ide : id, status: 'red'},
            // id='#'+id,
			success: function(data) {
				 var x = document.getElementById("alertx");
        		x.style.display = "block";
				//alert("Your Slot is Booked!!!!!");
				console.log('Ho gya bro!');
						},
						error: function(data) {
						console.log('Error Occured bro!');
			        }
		       });
         }}
else if(checkone()==1)
{
	//alert("You cannot Book another slot ,Your Slot is already Booked!!!!!");
	 var x = document.getElementById("alerty");
        x.style.display = "block";
}
 if(flag==2){
 var x = document.getElementById("alertz");
        x.style.display = "block";	
}
	});




});
