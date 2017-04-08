module.exports = function(shopApp){
    const paginationFn = function(){
        return function(list, start) {
            start = +start;
            if (angular.isDefined(list)) {
                return list.slice(start);
            }
        }
    };
    shopApp.filter('pagination', paginationFn);
};
