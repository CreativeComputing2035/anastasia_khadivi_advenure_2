$(document).ready( function(){	
	$("h2").hide();
	$("#sensible_answer").hide();
	$("#sensible_question_2").hide();
	$('#crazy_answer').hide();
	$('#crazy_question_2').hide();
	$('#both_answer').hide();
	$('#both_question_2').hide();
	$("#stock_over").hide();
	$("#bond_over").hide();
	$("#savings_over").hide()
	$("#cars_over").hide();
	$("#properties_over").hide();
	$("#gambling_over").hide();
	$("#house_over").hide();
	$("#college_over").hide();
	$("#teenagers_yay").hide();


		//hide before sliding in
	$("h2").slideDown(5000);
	//another way to fadeIn
	//slide in is another way of fading out!
	$("#sensible").click(function(){
		$('#sensible_answer').show();
		$('#sensible_question_2').show();
	})
	$("#savings").click(function(){
		$('#savings_over').show();
	})
	$("#bond").click(function(){
		$('#bond_over').show();
	})
	$("#stock").click(function(){
		$('#stock_over').show();
	})
	$("#crazy").click(function(){
		$('#crazy_answer').show()
		$("#crazy_question_2").show();
	})
	$("#both").click(function(){
		$("#both_answer").show();
		$("#both_question_2").show();
	})
	$("#start_over").click(function(){
		$("#sensible_answer").hide();
		$("#sensible_question_2").hide();
		$('#crazy_answer').hide();
		$('#crazy_question_2').hide();
		$('#both_answer').hide();
		$('#both_question_2').hide();
	})
	$("#cars").click(function(){
		$("#cars_over").show();
	})

	$("#properties").click(function(){
		$("#properties_over").show();
	})
	$("#gambling").click(function(){
		$("#gambling_over").show();
	})
	$("#house").click(function(){
		$("#house_over").show();
	})

	$("#college").click(function(){
		$("#college_over").show();
	})
	$("#teenagers").click(function(){
		$("#teenagers_yay").show();
	})

})
