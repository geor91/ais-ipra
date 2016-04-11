$('body').delegate('.js-ajax-link', 'click', function() {
	var targetId        = $(this).data('load') || null,
	    targetPage      = '',
	    targetPageHtml  = '',
	    currPageId      = $(this).parents('.page').attr('id'),
	    $pagesContainer = $('.main-content');

	if (targetId) {
		targetId        = '#' + targetId;
		currPageId      = '#' + currPageId;
		targetPageHtml  = $(targetId + 'tmp').html();

		if (targetPageHtml) {
			$pagesContainer.append(targetPageHtml);
			$(currPageId).attr('data-child', targetId);
			$(targetId).attr('data-parent', currPageId);
			$(currPageId).addClass('page_hidden');

			$(targetId + 'tmp').remove();
		}
	}
	else {
		targetId = $(this).parents('.page').data('parent');
		$(targetId).removeClass('page_hidden');
		$(currPageId).remove();
	}
});