jQuery(function($) {

	/**
	 * hledani datepicker
	 */
	$('.calendar').datepicker({
		dateFormat: 'dd.mm.yy',
	});

	$.datepicker.regional['cs'] = {
		closeText: 'Zavřít',
		prevText: 'Předchozí',
		nextText: 'Další',
		currentText: 'Dnes',
		monthNames: ['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'],
		monthNamesShort: ['led','úno','bře','dub','kvě','čer','čvc','srp','zář','říj','lis','pro'],
		dayNames: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
		dayNamesShort: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
		dayNamesMin: ['ne','po','út','st','čt','pá','so'],
		weekHeader: 'Týd',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};

	$.datepicker.setDefaults($.datepicker.regional['cs']);

});
