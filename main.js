$("#seeAnotherField").change(function() {
			if ($(this).val() == "no") {
				$('#otherFieldDiv').show();
				$('#otherField').attr('required','');
				$('#otherField').attr('data-error', 'This field is required.');
			} else {
				$('#otherFieldDiv').hide();
				$('#otherField').removeAttr('required');
				$('#otherField').removeAttr('data-error');				
			}
		});
		$("#seeAnotherField").trigger("change");

$("#seeAnotherField").change(function() {
	if ($(this).val() == "yes") {
		$('#otherFieldDiv1').show();
		$('#otherField1').attr('required','');
		$('#otherField1').attr('data-error', 'This field is required.');
	} else {
		$('#otherFieldDiv1').hide();
		$('#otherField1').removeAttr('required');
		$('#otherField1').removeAttr('data-error');
	}
});
$("#seeAnotherField").trigger("change");

var clipboard = "";
function error_function() {
	// Get the checkbox
	var checkBox1 = document.getElementById("quick_checkbox");
	var checkBox2 = document.getElementById("incorrect_checkbox");
	var checkBox3 = document.getElementById("name_checkbox");
	// Get the output text
	var text1 = document.getElementById("errors");
	var error1 = "Greeting not quick enough";
	var error2 = "Incorrect greeting used";
	var error3 = "Name not included";

	if (checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true){
		text1.textContent = "Incorrect greeting was used while we also missed out on our name and timing.";
		text1.style.display = "block";
		clipboard = text1;
	}
	else if (checkBox1.checked == true && checkBox2.checked == true) {
		text1.textContent = error1 + " and " + error2;
	}
	else if (checkBox1.checked == true && checkBox3.checked == true) {
		text1.textContent = error1 + " and " + error3;
		clipboard = text1;
	}
	else if (checkBox2.checked == true && checkBox3.checked == true) {
		text1.textContent = error2 + " and " + error3;
		clipboard = text1;
	}
	else{
	if (checkBox1.checked == true){
		text1.textContent = "Greeting not quick enough";
		text1.style.display = "block";
		clipboard = text1;
	}
	else if (checkBox2.checked == true){
		text1.textContent = "Incorrect greeting used";
		text1.style.display = "block";
		clipboard = text1;
	}
	else if (checkBox3.checked == true){
		text1.textContent = "Name not included";
		text1.style.display = "block";
		clipboard = text1;
	}else {
		text1.style.display = "none";
		clipboard = text1;
	}
	}
}
function express_function() {
	// Get the checkbox
	var checkBox = document.getElementById("express_checkbox");
	var text1 = document.getElementById("express");
	var express_quotes = ['fantastic', 'great job', 'awesome work',];
	var rnd = Math.floor(Math.random()*3);

		if (checkBox.checked == true){
			text1.textContent = express_quotes[rnd];
			text1.style.display = "block";
			clipboard = text1;
		}
		else {
			text1.style.display = "none";
			clipboard = text1;
		}
}
function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
}