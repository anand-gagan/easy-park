$(document).ready(function() {
	$('.slot').click(function() {
		//console.log("asdf");
		var id = $(this).attr('id');
	    this.style.backgroundColor = 'red';
		console.log($(this).attr('id'));
		$.ajax ({
			type: 'POST',
			url: '/book-slot',
		   	data: {ide : id, status: 'red'},
            // id='#'+id,
			success: function(data) {
				 var x = document.getElementById("alert");
        x.style.display = "block";
				alert("Your Slot is Booked!!!!!");
				console.log('Ho gya bro!');
			},
			error: function(data) {
				console.log('Error Occured bro!');
			}
		});
	});
});