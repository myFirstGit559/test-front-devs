module.exports = function(shopApp){
    const catalogCtrl = function () {
        const ctrl = this;
        ctrl.show = {
            men: true,
            women: true,
            children: true
        };
        ctrl.data = {
            men: null,
            women: null,
            children: null
        }
    };
    const catalogConfig = {
        templateUrl: require('./catalog.html'),
        controller: catalogCtrl
    };
    shopApp.component('catalog', catalogConfig);
};
