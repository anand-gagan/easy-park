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
				}
				for(var i=1; i<=24; i++){
        	var  cid='a'+i;
        	var flag=0;
        		 var xy = document.getElementById(cid);
         
				for(var j in data){
					//console.log(data[i].slotId+"     break     ");
					 if(data[j].slotId == cid)
					 {
					 	if(xy.style.backgroundColor != "red" )
         {
         xy.style.backgroundColor = "blue";
         }
         flag=1;
     }
				}
				if(xy.style.backgroundColor == "blue"  && flag != 1)
                xy.style.backgroundColor = "";  
                

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
$('#refresh').click(function() {
	console.log("refresh");
 $.ajax ({
			type: 'POST',
			url: '/refresh-data',
		   	data: {},
            // id='#'+id,
			success: function(data) {
				var s="";
					s+='<table id="customers" ><tr><th>SLOTID</th><th>name</th><th>bookingId</th></tr>';
					//document.getElementById("tablu").innerHTML+=('<tr><td>'+data[0].slotId+'</td><td>'+data[0].bname+'</td><td>'+data[0].bookingid+'</td></tr><br>');
				for(var i in data)
				{
					s+='<tr><td>';
					s+=data[i].slotId;
					s+='</td><td>';
					s+=data[i].bname;
					s+='</td><td>';
					s+=data[i].bookingid;
					s+='</td></tr>';
				}
				s+='</table>';
				document.getElementById("tablu").innerHTML=s;
						},
						error: function(data) {
				//console.log('admin ghnta!');
			        }
		       });

});
 $('.slot').mouseenter(function() {
 	var id = $(this).attr('id');
		var  cid='';
        		 var xx = document.getElementById(id);
         if(xx.style.backgroundColor == 'blue' )
         	xx.innerHTML="X";
         if(xx.style.backgroundColor == 'red' )
         	xx.innerHTML="B";
         if(xx.style.backgroundColor == '' )
         	xx.innerHTML="V";
         xx.style.opacity=1;
console.log(xx.style.opacity);
   });

 $('.slot').mouseout(function() {
 	var id = $(this).attr('id');
		var  cid='';
        		 var xx = document.getElementById(id);
         //if(xx.style.backgroundColor == 'blue' )
         	xx.innerHTML="+";
});

	$('.slot').click(function() {
		//console.log("asdf");
// var db = require('./db')(app);
          reloadin();
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
		   	data: {ide : id, status: 'red',name: name},
            // id='#'+id,
			success: function(data) {
				document.getElementById("notbar").innerHTML+='<center>	<div class="alert alert-warning alert-dismissible fade show bg-light" id="alertx" style=" width: 40%" role="alert"><strong>Congratulations '+name+',  </strong>   Your Slot is Booked!!!!! <strong>Booking id :- '+data+'</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><center>';
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


$('#bookform').submit(function(event) {
		event.preventDefault();
		var x=$('#bookid').val();
		console.log(x);
	$.ajax ({
			type: 'POST',
			url: '/returnslot',
		   	data: {bookid : x},
            // id='#'+id,
			success: function(data) {
				// var gag=data[0].name.length;
				// console.log(gag);
				if(data[0].slotId){
				document.getElementById("notbar").innerHTML+='<center>	<div class="alert  alert1 alert-warning alert-dismissible fade show bg-light" id="alertz" style=" width: 40% " role="alert">The slot with booking id <strong>'+x+'  </strong> was '+ data[0].slotId+' is booked by the name of <strong>'+data[0].bname+'<strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div></center>'
				}else{
					document.getElementById("notbar").innerHTML+='<center>	<div class="alert  alert1 alert-warning alert-dismissible fade show bg-light" id="alertz" style=" width: 40% " role="alert">The slot with booking id  <strong>'+x+'  </strong> was <strong>NOT FOUND<strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div></center>'
					}console.log("the slot searched was "+data);
			},
			error: function(data) {
				console.log('Error Occured bro!');
			}
		});

	});

 // code here

var adminflag=0;
	var path = window.location.pathname;
var pagee = path.split("/").pop();
if(pagee == "")
{
    var name="gagan";
    setTimeout(function() {

	 name=prompt("Enter your full name " + pagee);
	if(name.length > 15) name = name.substring(0,15)+'.....  ';
}, 1000);}
});
