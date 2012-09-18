
var content = "<style>input#password { width: 160px; font-size: 14px !important; border:1px solid #aaa; }p#incorrectMsg { display: none; font-size: 16px; color: red; margin: 10px 0; text-transform:lowercase; }div#overlay { position: absolute; top: 0; left: 0; height: 100%; width: 100%; min-width:600px; background-color: #fff; padding-left:50px; padding-top:100px; font-family:sans-serif; }div#overlay img {width:360px; display:block; margin-left:-11px;}</style><div id='overlay'><img src='https://raw.github.com/dormisher/mikehughes/master/title.png'/><input id='password' type='password' /><p id='incorrectMsg'>Incorrect password</p></div>";
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

		if ($('h1 a').attr('href').indexOf(key) != -1) {
			var href = $('h1 a').attr('href') + key;
			$('h1 a').attr('href', href);
		}		
	});
};

$(function () {
	$('#password').keyup(function (e) {
		if (e.keyCode == 13) {
			if ($('#password').val() == 'archive') {
				location.hash = key;
				hashUrls();
				$('#overlay').fadeOut();
				$('#incorrectMsg').hide();
			}
			else {
				$('#incorrectMsg').fadeIn();
			}
		}
	});
});