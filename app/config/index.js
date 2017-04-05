module.exports = function (shopApp) {
    require('../components/index.js')(shopApp);
    shopApp.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("");
        const catalog = {
            name: "catalog",
            url: "",
            template: "<catalog></catalog>"
        };
        const inner = {
            name: "product",
            url: "/product/:id",
            template: "<inner></inner>"
        };
        $stateProvider
            .state(catalog)
            .state(inner);
    });
};
