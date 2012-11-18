load('application');

action('index', function () {
    render({
        title: "events#index"
    });
});

action('view', function () {
    render({
        title: "events#view"
    });
});

action('search', function() {
	render({
		title: 'events#search'
	});
});

action('stream', function() {
	render({
		title: 'events#stream'
	});
});