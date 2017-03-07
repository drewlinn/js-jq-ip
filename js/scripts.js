$(document).ready(function(){
  $("#userName form").submit(function(event){
    var userName = ("userName");
    $("#userName form").hide();
    $("#question1").show();

    event.preventDefault();
  })
});
