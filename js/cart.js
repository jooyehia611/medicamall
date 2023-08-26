
$('.form-group--number').each(function() {
	var el = $(this),
		numberValue = el.find('input').val();
	el.find('.plus').on('click', function(e) {
		e.preventDefault();
		numberValue++;
		el.find('input').val(numberValue);
		el.find('input').attr('value', numberValue);
	});
	el.find('.minus').on('click', function(e) {
		e.preventDefault();
		if (numberValue > 1) {
			numberValue--;
			el.find('input').val(numberValue);
			el.find('input').attr('value', numberValue);
		}

	})
});