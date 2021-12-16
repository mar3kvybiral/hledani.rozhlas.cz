jQuery(function($) {

	/**
	 * hledani checkboxy
	 */
	let $viewFilters = $('.view-filters--hledani');

	$viewFilters.each(function() {

		let $viewFiltersBefCheckboxes = $(this).find('.bef-checkboxes');
		let $viewFiltersItem = $(this).find('.bef-checkboxes .form-item');
		let $viewFiltersItemAll = $(this).find('.bef-checkboxes .form-item.form-item-all'); // button All
		let $viewFiltersItemCheckbox = $(this).find('.bef-checkboxes .form-item.form-type-bef-checkbox input'); // checkbox
		let $viewFiltersButton = $(this).find('.button-popup'); // button Open/Close
		let viewFiltersItemVisible = 8;
		let uncheckedAll = true;

		// checkbox change
		$viewFiltersItemCheckbox.change(function() {

			if (this.checked) {
				uncheckedAll = false;
			} else {
				$viewFiltersItemCheckbox.each(function() {
					uncheckedAll = true;

					if (this.checked && uncheckedAll) {
						uncheckedAll = false;
						return false;
					}
				});
			}

			// checked vs. unchecked all
			if (uncheckedAll) {
				$viewFiltersItemAll.addClass('highlight');
			} else {
				$viewFiltersItemAll.removeClass('highlight');
			}
		});

		// button All
		$viewFiltersItemAll.click(function() {

			$viewFiltersItemCheckbox.each(function() {
				if ($(this).prop('checked')) {
					$(this).prop('checked', false);
				}

				$viewFiltersItemCheckbox.change();
			});

			return false;
		});

		// button Open/Close
		$viewFiltersButton.click(function() {

			// button open vs. close
			$(this).toggleClass('button-popup--open');
			$(this).toggleClass('button-popup--close');

			// checkboxes collapse vs. uncollapse
			$viewFiltersBefCheckboxes.toggleClass('collapse');

			return false;
		});
	});

});
