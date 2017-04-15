module.exports = function(shopApp){
    const selectCtrl = function () {
        const ctrl = this;
        ctrl.$onInit = function(){
            ctrl.sortProperties = ["price","name"];
            ctrl.sortBy =  ctrl.sortProperties[0];
        };
        ctrl.change = function () {
            ctrl.changeSortBy();
        }
    };
    const selectConfig = {
        templateUrl: require('./select.html'),
        bindings: {
            sortBy: '=',
            changeSortBy: '&'
        },
        controller: selectCtrl
    };
    shopApp.component('selectSort', selectConfig);
};
