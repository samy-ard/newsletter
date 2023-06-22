(function($) {
	function isEmail(email) {
  	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  	return regex.test(email);
	}

	$(document).ready(function() {
		$('.form').submit( function(e) {
			e.preventDefault();
			var valid = isEmail($('#email').val());
			$('.error').removeClass('error');
			$('.error-text').remove();

			if( valid ) {
				$('.form').hide();
				$('.modal').show();
				$('.modal').find('#form-email').text($('#email').val());
				$('.form').trigger("reset");
			} else {
				$('#email').addClass('error');
				$('#email').parent().append('<div class="error-text">Valid email required</div>')
			}
		});

		$('.btn-close').on('click', function(e) {
			e.preventDefault();
			$('.modal').hide();
			$('.form').show();
		});
	});
})(jQuery);