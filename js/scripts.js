
//backend
var nameInput;
var signInput;
var ageInput;

function choose(){
  if (ageInput > 20 && ageInput) {
    $("#match").show();
    $("#name").text(nameInput);
    $("#unmatch").hide();
    if(signInput === "Virgo" && ageInput <= 35) {
      $("#princessDate1").show();
      $("#princessDate2").hide();
      $("#princessDate3").hide();
      $("#princessDate4").hide();
      }
    else if(signInput === "Leo" && ageInput <= 35) {
      $("#princessDate2").show();
      $("#princessDate1").hide();
      $("#princessDate3").hide();
      $("#princessDate4").hide();
    }
    else if(signInput === "Pisces" && ageInput <= 35) {
      $("#princessDate3").show();
      $("#princessDate1").hide();
      $("#princessDate2").hide();
      $("#princessDate4").hide();
    }
    else {
      $("#princessDate4").show();
      $("#princessDate1").hide();
      $("#princessDate2").hide();
      $("#princessDate3").hide();
    }
  }
  else if (ageInput < 20 && ageInput) {
    $("#unmatch").show();
    $("#name1").text(nameInput);
    $("#match").hide();
    $("#princessDate4").hide();
    $("#princessDate1").hide();
    $("#princessDate2").hide();
    $("#princessDate3").hide();
  }

}

//front-end
$(document).ready(function() {
$("#detailsform").submit(function(event) {
  event.preventDefault();
  nameInput = $("input#addName").val();
  console.log(nameInput);
  signInput = $("select#addSign").val();
  console.log(signInput);
  ageInput = parseInt($("input#addAge").val());
  console.log(ageInput);

  event.preventDefault();

  choose(nameInput, signInput, ageInput);
  });
});
