$(document).ready(function() {
$("#detailsform").submit(function(event) {
  event.preventDefault();
  var nameInput = $("input#addName").val();
  console.log(nameInput);
  var signInput = $("select#addSign").val();
  console.log(signInput);
  var ageInput = parseInt($("input#addAge").val());
  console.log(ageInput);

  event.preventDefault();

  if (ageInput > 20 && ageInput) {
    $("#match").show();
    $("#name").text(nameInput);
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


  });


});
