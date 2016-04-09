
$('.page__backward').on('click', function() {
	$('.main-content').removeClass('main-content_scrolled');
});

$('.table-wrap tr').on('click', function() {
	$('.main-content').addClass('main-content_scrolled');
});
// ./partials/expand.js
// ./partials/modal.js