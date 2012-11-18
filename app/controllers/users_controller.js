load('application');

action('index', function () {
    render({
        title: "users#index"
    });
});

action('view', function () {
    render({
        title: "users#view"
    });
});

action('search', function () {
    render({
        title: "users#search"
    });
});