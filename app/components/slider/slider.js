module.exports = function(shopApp){
    const sliderCtrl = function(){
        const ctrl = this;
        var list = null;
        ctrl.$doCheck = function(){
            if(list == null && angular.isDefined(ctrl.prodList)){
                angular.forEach(ctrl.prodList, function (product, i) {
                    if(angular.isArray(product.sizes)){
                        product.sizes.unshift('size');
                        ctrl.product.size = product.sizes[0];
                    } else {
                        product.emptySize = true;
                    }


                });
                list = ctrl.prodList;
            }
        };
    };
    const sliderConfig = {
        templateUrl: require('./slider.html'),
        bindings: {
            prodList: '=',
            show: '=ngShow',
            type: '@'
        },
        controller: sliderCtrl
    };
    shopApp.component('slider', sliderConfig);
};
