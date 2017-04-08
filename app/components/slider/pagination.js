module.exports = function(shopApp){
    const paginationFn = function(){
        return function(input, start) {
            start = +start;
            return input.slice(start);
        }
    };
    shopApp.filter('pagination', paginationFn);
};
