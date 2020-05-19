$("#cl_home_phone").on("keyup", function(e){

    let tel = $(this).val();
    tel=tel.replace(/\D/g,"")
    tel=tel.replace(/^(\d)/,"($1")
    tel=tel.replace(/(.{3})(\d)/,"$1)$2")
    if(tel.length == 9) {
        tel=tel.replace(/(.{1})$/,"-$1")
    } else if (tel.length == 10) {
        tel=tel.replace(/(.{2})$/,"-$1")
    } else if (tel.length == 11) {
        tel=tel.replace(/(.{3})$/,"-$1")
    } else if (tel.length == 12) {
        tel=tel.replace(/(.{4})$/,"-$1")
    } else if (tel.length > 12) {
        tel=tel.replace(/(.{4})$/,"-$1")
    }
 $(this).val(tel);
 });










function ContactCreate(storeName, dataEntity, co_client)
{
	var co_description 	= $("#co_description").val();
	var co_type 		= $("#co_type").val();

	var jsonCO = 	{
					"client": co_client.replace("CL-",""),
					"description": co_description,
					"type": co_type
					};

	var urlCO = "/api/dataentities/" + dataEntity + "/documents/";

	$.ajax({
		headers: {
			"Accept": "application/vnd.vtex.ds.v10+json",
			"Content-Type": "application/json"
		},
		data: JSON.stringify(jsonCO),
		type: 'PATCH',
		url: urlCO,
		success: function (data) {
		  console.log(data);
		  ResetMessages()
		  $("#co_message_success").show();
		  $("#cl_first_name").val("");
		  $("#cl_last_name").val("");
		  $("#cl_email").val("");
		  $("#cl_home_phone").val("");
		  $("#cl_phone").val("");
		  $("#co_type").val("");
		  $("#co_description").val("");
		},
		error: function (data) {
		  console.log(data);
		  ResetMessages()
		  $("#co_message_error").show();
		}
	});
}

function ContactCreateByEmail(storeName, dataEntity, cl_email)
{
	var cl_url = "/api/dataentities/CL/search/?email=" + cl_email + "&_fields=id";
	
	$.ajax({
		headers: {
			"Accept": "application/vnd.vtex.ds.v10+json",
			"Content-Type": "application/json"
		},
		type: 'GET',
		url: cl_url,
		success: function(data, textStatus, xhr){
			console.log(data);
			if(xhr.status == "200" || xhr.status == "201"){
				ContactCreate(storeName, dataEntity, data[0].id);
			}else{
				ResetMessages()
				$("#co_message_error").show();
			}
		},
		error: function(data){
			console.log(data);
			ResetMessages()
			$("#co_message_error").show();
		}
	});
}

function ClientCreate()
{
	var storeName		= $("#master_data_store_name").val();
	var dataEntity		= $("#master_data_data_entity").val();

	var cl_first_name 	= $("#cl_first_name").val();
	var cl_last_name 	= $("#cl_last_name").val();
	var cl_email 		= $("#cl_email").val();
	var cl_home_phone 	= $("#cl_home_phone").val();
	var cl_phone 		= $("#cl_phone").val();
	var cl_type         = $("#co_type").val(); 
	var cl_description  = $("#co_description").val();
	
	var cl_json = 	{
					"firstName": cl_first_name,
					"lastName": cl_last_name,
					"email": cl_email,
					"homePhone": cl_home_phone,
					"phone": cl_phone,
					"type": cl_type,
					"description": cl_description
					};

	var cl_url = "/api/dataentities/CO/documents/";

	$.ajax({
		headers: {
			"Accept": "application/vnd.vtex.ds.v10+json",
			"Content-Type": "application/json"
		},
		data: JSON.stringify(cl_json),
		type: 'PATCH',
		url: cl_url,
		success: function(data, textStatus, xhr){
			console.log(data);
			if(xhr.status == "200" || xhr.status == "201"){
				ContactCreate(storeName, dataEntity, data.Id);
			}else if(xhr.status == "304"){
				ContactCreateByEmail(storeName, dataEntity, cl_email);
			}else{
				ResetMessages()
				$("#co_message_error").show();
			}
		},
		error: function(data){
			console.log(data);
			ResetMessages()
			$("#co_message_error").show();
		}
	});
}

function ResetMessages()
{
	$("#co_message_loading").hide();
	$("#co_message_validate").hide();
	$("#co_message_success").hide();
	$("#co_message_error").hide();
}

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function FormValidate()
{
	var isFormValidate = true;

	if($("#cl_first_name").val() == ""){
		isFormValidate = false;
		$("#cl_first_name").focus();
	}
	if((isFormValidate) && ($("#cl_last_name").val() == "")){
		isFormValidate = false;
		$("#cl_last_name").focus();
	}
	if((isFormValidate) && ($("#cl_email").val() == "")){
		isFormValidate = false;
		$("#cl_email").focus();
	}
	if((isFormValidate) && (!IsEmail($("#cl_email").val()))){
		isFormValidate = false;
		$("#cl_email").val("");
		$("#cl_email").focus();
	}
	if((isFormValidate) && ($("#cl_home_phone").val() == "")){
		isFormValidate = false;
		$("#cl_home_phone").focus();
	}
	if((isFormValidate) && ($("#co_type").val() == "")){
		isFormValidate = false;
		$("#co_type").focus();
	}
	if((isFormValidate) && ($("#co_description").val() == "")){
		isFormValidate = false;
		$("#co_description").focus();
	}
	
	if(isFormValidate){
		ResetMessages()
		$("#co_message_loading").show();
		ClientCreate();
	}else{
		ResetMessages()
		$("#co_message_validate").show();
	}

	return false;
}

 