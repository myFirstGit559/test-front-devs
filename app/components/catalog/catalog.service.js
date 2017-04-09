module.exports = function(shopApp){
    const prodServiceFn = function ($resource, $filter) {
        const getJson = function (name, callback) {
            $resource('../../data/' + name + '.json', {}, {
                getData: {method: 'GET', isArray: true}
            }).getData(callback);
            return this;
        };
        const getProduct = function (name, id, callback) {
            $resource('../../data/' + name + '.json', {}, {
                findData: {method: 'GET', isArray: true}
            }).findData(function(data) {
                callback($filter('filter')(data,{id:id})[0]);
            });
        };
        return {
            getJson: getJson,
            getProduct: getProduct
        }
    };
    shopApp.service('prodService', prodServiceFn);
};
