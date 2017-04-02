module.exports = function(shopApp){
    const innerCtrl = function () {
        const ctrl = this;
    };
    const innerConfig = {
        templateUrl: require('./inner.html'),
        controller: innerCtrl
    };
    shopApp.component('inner', innerConfig);
};

