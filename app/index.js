const styles = require('./less\/');
//products data
const men = require('./data/men.json');
const women = require('./data/women.json');
const children = require('./data/children.json');
//images
const logo = require('./img/logo_google.png');
//angular app
const angular = require('angular');
const uirouter = require('angular-ui-router');
const sanitize = require('angular-sanitize');
const resource = require('angular-resource');
const shopApp = angular.module('shopApp', [sanitize,resource,uirouter]);

require('./config')(shopApp);