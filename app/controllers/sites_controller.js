load('application');

action('index', function () {
    render({
        title: "sites#index"
    });
});

action('about', function () {
    render({
        title: "sites#about"
    });
});