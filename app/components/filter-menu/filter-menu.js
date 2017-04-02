module.exports = function(shopApp){
    const filterMenuCtrl = function () {
        const ctrl = this;


    };
    const filterMenuConfig = {
        templateUrl: require('./filter-menu.html'),
        controller: filterMenuCtrl
    };
    shopApp.component('filterMenu', filterMenuConfig);
};
