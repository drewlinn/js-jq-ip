//business logic
var destiNation =
var question1 = $("input:radio[name=question1]:checked").val();
var question2A = $("input:radio[name=question2A]:checked").val();
var question2B = $("input:radio[name=question2B]:checked").val();
var question3A = $("input:radio[name=question3A]:checked").val();
var question3B = $("input:radio[name=question3B]:checked").val();
var question3C = $("input:radio[name=question3C]:checked").val();
var question3D = $("input:radio[name=question3D]:checked").val();
var question4A = $("input:radio[name=question4A]:checked").val();
var question4B = $("input:radio[name=question4B]:checked").val();
var question4C = $("input:radio[name=question4C]:checked").val();
var question4D = $("input:radio[name=question4D]:checked").val();
var question4E = $("input:radio[name=question4E]:checked").val();
var question4F = $("input:radio[name=question4F]:checked").val();
var question4G = $("input:radio[name=question4G]:checked").val();
var question4H = $("input:radio[name=question4H]:checked").val();

//user interface logic
$(document).ready(function()  {
  $("form#userName").submit(function(event)  {
    var userName = $("input#userName").val();
    $("#userName").text(userName)
    if (question1 === "A")  {
      $(".question1").hide();
      $(".question2A").show();
    } else if (question1 === "B")
      $(".question1").hide();
      $(".question2B").show();
    }
    if (question2A === "A")  {
      $(".question2A").hide();
      $(".question3A").show();
    } else if (question2A === "B")
      $(".question2A").hide();
      $(".question3B").show();
    }
    if (question2B === "A")  {
      $(".question2B").hide();
      $(".question3C").show();
    } else if (question2B === "B")
      $(".question2B").hide();
      $(".question3D").show();
    }
    if (question3A === "A")  {
      $(".question3A").hide();
      $(".question4A").show();
    } else if (question3A === "B")
      $(".question3A").hide();
      $(".question4B").show();
    }
    if (question3B === "A")  {
      $(".question3B").hide();
      $(".question4C").show();
    } else if (question3B === "B")
      $(".question3B").hide();
      $(".question4D").show();
    }
    if (question3C === "A")  {
      $(".question3C").hide();
      $(".question4E").show();
    } else if (question3C === "B")
      $(".question3C").hide();
      $(".question4F").show();
    }
    if (question3D === "A")  {
      $(".question3D").hide();
      $(".question4G").show();
    } else if (question3D === "B")
      $(".question3D").hide();
      $(".question4H").show();
    }
    if (question4A === "A")  {
      $(".question4A").hide();
      $(".London").show();
    } else if (question4A === "B")
      $(".question4A").hide();
      $(".NewYork").show();
    }
    if (question4B === "A")  {
      $(".question4B").hide();
      $(".Rome").show();
    } else if (question4B === "B")
      $(".question4B").hide();
      $(".Istanbul").show();
    }
    if (question4C === "A")  {
      $(".question4C").hide();
      $(".Amsterdam").show();
    } else if (question4C === "B")
      $(".question4C").hide();
      $(".Paris").show();
    }
    if (question4D === "A")  {
      $(".question4D").hide();
      $(".Barcelona").show();
    } else if (question4D === "B")
      $(".question4D").hide();
      $(".Milan").show();
    }
    if (question4E === "A")  {
      $(".question4E").hide();
      $(".Bangkok").show();
    } else if (question4E === "B")
      $(".question4E").hide();
      $(".HongKong").show();
    }
    if (question4F === "A")  {
      $(".question4F").hide();
      $(".KualaLumpur").show();
    } else if (question4F === "B")
      $(".question4F").hide();
      $(".Singapore").show();
    }
    if (question4G === "A")  {
      $(".question4G").hide();
      $(".Dubai").show();
    } else if (question4G === "B")
      $(".question4G").hide();
      $(".Tokyo").show();
    }
    if (question4H === "A")  {
      $(".question4H").hide();
      $(".Seoul").show();
    } else if (question4H === "B")
      $(".question4H").hide();
      $(".Taipei").show();
    }


    event.preventDefault();
  });
});
