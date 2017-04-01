module.exports = function(shopApp){
    const sliderCtrl = function(){
        const ctrl = this;
    };
    const sliderConfig = {
        templateUrl: require('./slider.html'),
        bindings: {
            prodList: '<',
            show: '=ngShow',
            type: '@'
        },
        controller: sliderCtrl
    };
    shopApp.component('slider', sliderConfig);
};
