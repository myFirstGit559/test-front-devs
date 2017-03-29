module.exports = function(shopApp){
    require('./catalog/catalog.service.js')(shopApp);
    require('./filter-menu/filter-menu.js')(shopApp);
    require('./select/select.js')(shopApp);
    require('./slider/slider.js')(shopApp);
    require('./catalog/catalog.js')(shopApp);
    require('./inner/inner.js')(shopApp);
};

