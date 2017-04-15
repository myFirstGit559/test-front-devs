module.exports = function(shopApp){
    const filterMenuCtrl = function () {
        const ctrl = this;
        ctrl.whatToShow = {};
        var init = function() {
            ctrl.whatToShow = {
                men: true,
                women: true,
                children: false
            }
        };
        ctrl.$onInit = function(){
            init();
        };
        ctrl.changeView = function() {
            ctrl.changeShow();
        };
    };
    const filterMenuConfig = {
        templateUrl: require('./filter-menu.html'),
        bindings: {
            whatToShow: '=',
            changeShow: '&'
        },
        controller: filterMenuCtrl
    };
    shopApp.component('filterMenu', filterMenuConfig);
};
