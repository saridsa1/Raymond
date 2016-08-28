$( "#form-two" ).hide();
$( "#form-three" ).hide();
$( "#form-four" ).hide();

$("#submit-form-one").click(function() {
 $("#form-one").hide();
 $("#form-two").show();
});
