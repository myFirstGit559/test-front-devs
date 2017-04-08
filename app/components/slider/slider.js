module.exports = function(shopApp){
    const sliderCtrl = function($state){
        const ctrl = this;
        var list = null;
        ctrl.currentPage = 0;
        ctrl.$doCheck = function(){
            if(list == null && angular.isDefined(ctrl.prodList)){
                var lg = ctrl.prodList.length;
                var pageCount = function() {
                    var screenWidth = document.documentElement.clientWidth;
                    if(screenWidth > 1070) {
                        ctrl.itemCount = 3;
                        ctrl.page = Math.ceil(lg/ctrl.itemCount);
                    } else if(screenWidth <= 1070 && screenWidth > 576) {
                        ctrl.itemCount = 2;
                        ctrl.page = Math.ceil(lg/2);
                    } else {
                        ctrl.itemCount = 1;
                        ctrl.page = lg;
                    }
                };
                pageCount();
                // recount ctrl.page and item count if window resize
                angular.element(document.documentElement).on('resize', function() {
                    console.log('resize');
                    pageCount();
                });
                console.log(document.documentElement.clientWidth);
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
        ctrl.moveLeft = function() {

        };
        ctrl.moveRight = function() {

        };
        ctrl.inner = function(id) {
            $state.go('product',{title:ctrl.title,id:id});
        }
    };
    const sliderConfig = {
        templateUrl: require('./slider.html'),
        bindings: {
            prodList: '=',
            show: '=ngShow',
            sortBy: '=',
            title: '@'
        },
        controller: sliderCtrl
    };
    shopApp.component('slider', sliderConfig);
};
