$(".username").html(username);//write username
var domainname = "www.ssosch.com";
//user api
$.ajax({
	type:"post",
	url:"controller/user.php",
	data:{list:1},
	dataType: "json",
	success: function(data){
		//console.log(data);
		/*if (data) {
			for (k in data){
				$(".cat_id_radio").append('<span class="mr20" onclick="new_redio(this)"><label class="com-icon redio-btn w30" id="'+data[k].id+'"></label>'+data[k].notice_name+'</span>');
			};
		}else{
			$('.error').fadeIn(0).delay(1000).fadeOut("slow");
		}*/
	}
});

//message api
$.ajax({
	type:"post",
	url:"controller/message.php",
	data:{list:1},
	dataType: "json",
	success: function(data){
		if (data.dm == 1) {
			$("#message_num").html(data.msg);
		}else{
			$('.tip').html(data.msg).fadeIn(0).delay(1000).fadeOut("slow");
		}
	}
});

$.ajax({
	type:"post",
	url:"controller/message2.php",
	data:{list:1},
	dataType: "json",
	success: function(data){
		console.log(data);
		if (data.dm == 1) {
			$("#user_num").html(data.msg);
		}else{
			$('.tip').html(data.msg).fadeIn(0).delay(1000).fadeOut("slow");
		}
	}
});