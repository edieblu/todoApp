// check off todo when clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

// click X to delete

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation(); // to stop event bubbling
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grab todo text before hiting enter
		var todoText = $(this).val(); 
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'aria-hidden='true'></i></span> " + todoText+ "</li>")
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})