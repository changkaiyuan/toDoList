//mark off finished todos by clicking
//
//method 1


// $('li').click(function(){
// 	// turn black if gray
// 	if($(this).css("color") === "rgb(128, 128, 128)")
// 	{
// 		$(this).css({
// 			color:"black",
// 			textDecoration:"none"
// 		});
// 	}
// 	//else turn gray
// 	else{
// 		$(this).css({
// 		color:"gray",
// 		textDecoration:"line-through"
// 	});
// 	}

// });
// 
// method 2

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})


// click x to delete todo
$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});


//add todo after hitting enter
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todoText = $(this).val();
		$("ul").append("<li><span>x</span> " + todoText + "</li>");
		$(this).val("");

	}
});