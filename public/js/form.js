var firstName;
var lastName;
var ageYears;
var maritalStatus;
var noOfDependents;
var occupation;
var grossSalary;
var salarySacrifice;
var employmentType;
var mortgageValue;
var mortgageInterest;
var creditValue;
var creditInterest;
var insurance;

$( "#form-two" ).hide();
$( "#form-three" ).hide();
$( "#form-four" ).hide();
$( "#analysis" ).hide();
$('#income-protection').hide();
$('#debt-consollidation').hide();


$("#submit-form-one").click(function() {
 $("#form-one").hide();
 $("#form-two").show();
});

$("#submit-form-two").click(function() {
 $("#form-two").hide();
 $("#form-three").show();
});

$("#submit-form-three").click(function() {
 $("#form-three").hide();
 $("#form-four").show();
});

$("#submit-form-four").click(function() {
 $("#form-card").hide();
 $("#analysis").show();
 show();
});

$(document).ready(function(){
         $('#submit-form-one').click(function(){
          firstName = document.getElementById('first_name').value;
          lastName = document.getElementById('last_name').value;
          ageYears = document.getElementById('age').value;
          maritalStatus = document.getElementById('marital-status').value;
          noOfDependents = document.getElementById('dependents').value;
        });
        $('#submit-form-two').click(function(){
          occupation = document.getElementById('occupation').value;
          grossSalary = document.getElementById('gross-salary').value;
          salarySacrifice = document.getElementById('salary-sacrifice').value;
          employmentType = document.getElementById('employ-type').value;
        });
        $('#submit-form-three').click(function(){
          mortgageValue = document.getElementById('mortgage-value').value;
          mortgageInterest = document.getElementById('mortgage-interest').value;
          creditValue = document.getElementById('credit-value').value;
          creditInterest = document.getElementById('credit-interest').value;
        });
        $('#submit-form-four').click(function(){
          insurance = document.getElementById('income-insurance').value;
        });

    });

function show(){
  if (noOfDependents > 0 && employmentType == 'Self-Employed' && mortgageValue > 0) {
    $('#income-protection').show();
  }
  if (mortgageValue > 0 && creditValue > 0) {
    $('#debt-consollidation').show();
  }
}
