
var content = "<style>h1#loginHeading,p#number { text-transform:uppercase; font-size: 16px; font-weight:bold; margin:0;  }h1#loginHeading { letter-spacing:3px; word-spacing:3px; }p#number {  letter-spacing:15px; word-spacing:5px; margin-top:5px;}h1#loginHeading a {text-decoration:none; color:#000;}input#password { padding: 5px 10px; width: 200px; font-size: 14px !important; border:1px solid #000; margin-top:20px; }p#incorrectMsg { display: none; font-size: 18px; color: red; }div#overlay { position: absolute; top: 0; left: 0; height: 100%; width: 100%; min-width:600px; background-color: #fff; padding-left:50px; padding-top:100px; font-family:sans-serif; }</style><div id='overlay'><h1 id='loginHeading'>Mike Hughes <a href='mailto:massproduct@hotmail.com'>massproduct@hotmail.com</a></h1><p id='number'>+ 44 (0) 7949 081 355</p><input id='password' type='password' /><p id='incorrectMsg'>Incorrect password</p></div>";
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
		if ($('#password').val() == 'archive') {
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