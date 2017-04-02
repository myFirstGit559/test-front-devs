const styles = require('./less\/');
//products data
const men = require('./data/men.json');
const women = require('./data/women.json');
const children = require('./data/children.json');
//images
const logo = require('./img/logo_google.png');
require('./img/checkbox_checked.png');
require('./img/arrows/back.png');
require('./img/arrows/bottom.png');
require('./img/arrows/left.png');
require('./img/arrows/right.png');
require('./img/arrows/top.png');
require('./img/products/m_backpack.jpg');
require('./img/products/m_pants.jpg');
require('./img/products/m_tshirt.jpg');
require('./img/products/w_jacket.jpg');
require('./img/products/w_sneakers.jpg');
require('./img/products/w_tshirt.jpg');
//angular app
const angular = require('angular');
const uirouter = require('angular-ui-router');
const sanitize = require('angular-sanitize');
const resource = require('angular-resource');
const shopApp = angular.module('shopApp', [sanitize,resource,uirouter]);

require('./config')(shopApp);