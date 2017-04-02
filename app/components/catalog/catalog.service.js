module.exports = function(shopApp){
    const prodServiceFn = function ($resource) {
        const getJson = function (name, callback) {
            $resource('../../data/' + name + '.json', {}, {
                getData: {method: 'GET', isArray: true}
            }).getData(callback);
            return this;
        };
        return {
            getJson: getJson
        }
    };
    shopApp.service('prodService', prodServiceFn);
};
