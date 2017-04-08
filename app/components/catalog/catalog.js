module.exports = function(shopApp){
    const catalogCtrl = function (prodService) {
        const ctrl = this;
        //filter checkboxes
        ctrl.changeShow = function() {
            ctrl.show = ctrl.WhatToShow;
        };
        ctrl.data = {};
        ctrl.show = {};
        prodService
            .getJson('men', function(data) {
                ctrl.data.men = data;
                ctrl.show.men = true;
            })
            .getJson('women', function(data){
                ctrl.data.women = data;
                ctrl.show.women = true;
            })
            .getJson('children', function(data) {
                ctrl.data.children = data;
                ctrl.show.children = false;
            });
    };
    const catalogConfig = {
        templateUrl: require('./catalog.html'),
        controller: catalogCtrl
    };
    shopApp.component('catalog', catalogConfig);
};
