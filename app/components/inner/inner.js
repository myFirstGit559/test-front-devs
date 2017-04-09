module.exports = function(shopApp){
    const innerCtrl = function ($stateParams, prodService) {
        const ctrl = this;
        prodService.getProduct($stateParams.title, $stateParams.id, function(data) {
            ctrl.product = data;
            ctrl.product.strSizes = (angular.isArray(ctrl.product.sizes))?ctrl.product.sizes.join(','):ctrl.product.sizes;
        });
    };
    const innerConfig = {
        templateUrl: require('./inner.html'),
        controller: innerCtrl
    };
    shopApp.component('inner', innerConfig);
};

