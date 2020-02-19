//mark off finished todos by clicking
//

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})


// click to delete todo
$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});


//add todo after hitting enter
$("input[type='text']").keypress(function(event){
	if(event.which===13 &&$(this).val()!=""){
		var todoText = $(this).val();
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></i></span> " + todoText + "</li>");
		$(this).val("");

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});