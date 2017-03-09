//business logic
var quesTion1 = (".question1#input")
var quesTion2 = (".question2#input")
var quesTion3 = (".question3#input")
var quesTion4 = (".question4#input")
var quesTion5 = (".question5#input")

//user interface logic
$(document).ready(function()  {
  $("form btn").submit(function(event){
    event.preventDefault();
    if (quesTion1 === "A" && quesTion2 === "A" && quesTion3 === "A" && quesTion4 === "A" && quesTion5 === "A") {
      $("#NewYork").show();
    } else if (quesTion1 === "B" && quesTion2 === "B" && quesTion3 === "B" && quesTion4 === "B" && quesTion5 === "B") {
      $("#Chicago").show();
    } else if (quesTion1 === "C" && quesTion2 === "C" && quesTion3 === "C" && quesTion4 === "C" && quesTion5 === "C") {
      $("#Charleston").show();
    }  else if (quesTion1 === "D" && quesTion2 === "D" && quesTion3 === "D" && quesTion4 === "D" && quesTion5 === "D") {
      $("#LasVegas").show();

      $(destiNation)
  });
});
