$( "#form-two" ).hide();
$( "#form-three" ).hide();
$( "#form-four" ).hide();
$( "#analysis" ).hide();

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
});
