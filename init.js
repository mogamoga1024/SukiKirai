
const $window = $(window);
const $container = $("#container");

$container.outerHeight($window.height());

$window.resize(function() {
    $container.outerHeight($window.height());
});

