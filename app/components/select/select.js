module.exports = function(shopApp){
    const selectCtrl = function () {
        const ctrl = this;


    };
    const selectConfig = {
        templateUrl: require('./select.html'),
        controller: selectCtrl
    };
    shopApp.component('selectCustomer', selectConfig);
};
