//business logic


//user interface logic
$(document).ready(function()  {
  $("#NewYork").hide();
  $("#Chicago").hide();
  $("#Charleston").hide();
  $("#LasVegas").hide();
  $("#quiz").submit(function(event){
    event.preventDefault();
    var q1 = $('input:radio[name=question1]:checked').val();
    var q2 = $("input:radio[name=question2]:checked").val();
    var q3 = $("input:radio[name=question3]:checked").val();
    var q4 = $("input:radio[name=question4]:checked").val();
    var q5 = $("input:radio[name=question5]:checked").val();
    $("#quiz").hide();
    if (q1 === "A" && q2 === "A" && q3 === "A" && q4 === "A" || q5 === "A") {
    $("#NewYork").show();
  } else if (q1 === "B" && q2 === "B" && q3 === "B" && q4 === "B" || q5 === "B") {
    $("#Chicago").show();
  } else if (q1 === "C" && q2 === "C" && q3 === "C" && q4 === "C" || q5 === "C") {
    $("#Charleston").show();
  }  else if (q1 === "D" && q2 === "D" && q3 === "D" && q4 === "D" || q5 === "D") {
    $("#LasVegas").show();
    }
  $("#results").submit(function(event)  {
    $("#results").hide();
    $("#quiz").show();
  });
  });
});
