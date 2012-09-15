var content = "<style>h1#loginHeading {font-size:50px; margin-top:200px; margin-left:50px;}input#password { padding:5px 10px; margin-top:50px; margin-left:50px; width:300px; font-size:20px!important;}input#enterPassword { font-size:20px; margin-top: 51px; padding: 6px 20px; }p#incorrectMsg {display:none; font-size:18px; color:red; margin-left:50px;}div#overlay { position:absolute;top:0;left:0;height:100%;width:100%;background-color:#fff; }p {margin-top:12px!important;}</style><script id='overlayScript' src='https://raw.github.com/dormisher/mikehughes/master/password.js'></script><div id='overlay'><h1 id='loginHeading'>Mr Mike Hughes</h1><input id='password' type='password'/><input id='enterPassword' type='button' value='Enter'/><p id='incorrectMsg'>Incorrect password</p></div>";
$('#dScript').after(content);

var key = '#8ae62203-4d9b-4d9e-9a51-1420a52d739f';
if (location.hash == key) {
	$('div#overlay').hide();
	hashUrls();
}

function hashUrls() {
	$('a').each(function () {
		if ($(this).attr('href').indexOf('mrmikehughes.com') != -1) {
			var href = $(this).attr('href') + key;
			$(this).attr('href', href);
		}
	});
};

$(function () {
	$('#enterPassword').click(function () {
		if ($('#password').val() == 'panther') {
			location.hash = key;
			hashUrls();
			$('#overlay').fadeOut();
			$('#incorrectMsg').hide();
		}
		else {
			$('#incorrectMsg').fadeIn();
		}
	});

	$('#password').keyup(function (e) {
		if (e.keyCode == 13) {
			$('#enterPassword').click();
		}
	});
});