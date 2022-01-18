$(document).ready(function(){
    $(".design1").click(function(event){
        $(".design").toggle();
    });
});

$(document).ready(function(){
    $(".development1").click(function(event){
        $(".development").toggle();
    });
});
$(document).ready(function(){
    $(".product1").click(function(event){
        $(".product").toggle();
    });
});
  
  $(document).ready(function(){
    $("form#fill").submit(function(event){
      event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });
  