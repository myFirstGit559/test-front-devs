module.exports = function(shopApp){
    const sliderCtrl = function($state){
        const ctrl = this;
        ctrl.page = 5; //timely
        var list = null;
        ctrl.$doCheck = function(){
            if(list == null && angular.isDefined(ctrl.prodList)){
                angular.forEach(ctrl.prodList, function (product, i) {
                    if(angular.isArray(product.sizes)){
                        product.sizes.unshift('size');
                        product.size = product.sizes[0];
                    } else {
                        product.emptySize = true;
                    }


                });
                list = ctrl.prodList;
            }
        };
        ctrl.inner = function(id) {
            $state.go('product/'+ id);
        }
    };
    const sliderConfig = {
        templateUrl: require('./slider.html'),
        bindings: {
            prodList: '=',
            show: '=ngShow',
            title: '@'
        },
        controller: sliderCtrl
    };
    shopApp.component('slider', sliderConfig);
};
