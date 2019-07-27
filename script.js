$(document).ready(function(event){
 $("#uname").keypress(function(event){
     let size = document.getElementById('uname').value.length;
    let bla = $("#uname").val();
    // bla++;
     if(size<7){
        $(".msg").text("Username Must be 8 Character")
     }else{
        // $(".msg").html("");
        $(".msg").html(bla);

     }
 });
});




	
		
	
