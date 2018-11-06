$(document).ready(function() {
	var flag=0;
	reloadin();
	function reloadin(cid){
        
	$.ajax ({
			type: 'POST',
			url: '/checkbooked',
		   	data: {},
            // id='#'+id,
			success: function(data) {
				for(var i in data){
					console.log(data[i].slotId+"     break     ");
					 var xx = document.getElementById(data[i].slotId);
					 if(xx.style.backgroundColor != "red")
         xx.style.backgroundColor = "blue";
				}
			},
			error: function(data) {
				console.log('Error Occured bro!');
			}
		});
       }
	$('.container').click(function() {
		reloadin();
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
				// var x = document.getElementById("alertady");
        		//x.style.display = "block";
        		document.getElementById("notbar").innerHTML+='<center>	<div class="alert alert-warning alert-dismissible fade show bg-light" id="alertx" style="sticky:top; width: 40%" role="alert"><strong>Congratulations</strong>   This Slot is Vacant NOW!!!!!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><center>';
				//alert("Your Slot is Booked!!!!!");
				console.log('admin ki jai ho!');
				xx.style.backgroundColor = "";
						},
						error: function(data) {
						console.log('admin ghnta!');
			        }
		       });
	 else
	 {
	 	// var x = document.getElementById("alertadn");
   //      		x.style.display = "block";
   document.getElementById("notbar").innerHTML+='<center>	<div class="alert alert-warning alert-dismissible fade show bg-light" id="alertadn" style=" width: 40%" role="alert"><strong>Sorry  .</strong>   This slot is already vacant!!!!!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><center>'
	 }
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
				document.getElementById("notbar").innerHTML+='<center>	<div class="alert alert-warning alert-dismissible fade show bg-light" id="alertx" style=" width: 40%" role="alert"><strong>Congratulations</strong>   Your Slot is Booked!!!!!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><center>';
				 //var x = document.getElementById("alertx");
        		//x.style.display = "block";
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
	 document.getElementById("notbar").innerHTML+='<center>	<div class="alert  alert1 alert-warning alert-dismissible fade show bg-light" id="alerty" style=" width: 40% " role="alert"><strong>SORRY</strong>      You cannot Book another slot ,Your Slot is already Booked!!!!!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><center>'
}
 if(flag==2){
document.getElementById("notbar").innerHTML+='<center>	<div class="alert  alert1 alert-warning alert-dismissible fade show bg-light" id="alertz" style=" width: 40% " role="alert"><strong>SORRY!  </strong> This slot is already Booked!!!!!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div></center>'
}
	});




});
