//business logic


//user interface logic
$(document).ready(function()  {
  $("#results").hide();
  $("#quiz").submit(function(event){
    event.preventDefault();
    var question1 = $('input:radio[name=question1]:checked').val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    $("#quiz").hide();
    if (question1 === "A" && question2 === "A" && question3 === "A" && question4 === "A" && question5 === "A") {
    $("#NewYork").show();
  } else if (question1 === "B" && question2 === "B" && question3 === "B" && question4 === "B" && question5 === "B") {
    $("#Chicago").show();
  } else if (question1 === "C" && question2 === "C" && question3 === "C" && question4 === "C" && question5 === "C") {
    $("#Charleston").show();
  }  else if (question1 === "D" && question2 === "D" && question3 === "D" && question4 === "D" && question5 === "D") {
    $("#LasVegas").show();
  }

  });
});
