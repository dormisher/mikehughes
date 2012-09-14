
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