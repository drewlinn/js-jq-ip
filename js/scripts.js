$(document).ready(function(){
  $("#userName form").submit(function(event){
    var userName = ("userName");
    $("#userName form").fadeOut();
    $("#question1").fadeIn();

    event.preventDefault();
  })
});
