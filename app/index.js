const styles = require('./less\/');
//products data
const men = require('./data/men.json');
const women = require('./data/women.json');
const children = require('./data/children.json');
//images
const logo = require('./img/logo_google.png');
require('./img/arrows.png');
require('./img/products/m_backpack.jpg');
require('./img/products/m_pants.jpg');
require('./img/products/m_tshirt.jpg');
require('./img/products/w_jacket.jpg');
require('./img/products/w_sneakers.jpg');
require('./img/products/w_tshirt.jpg');
//fonts
require('./font/quicksand-bold-webfont.eot');
require('./font/quicksand-bold-webfont.svg');
require('./font/quicksand-bold-webfont.ttf');
require('./font/quicksand-bold-webfont.woff');
require('./font/quicksand-bold-webfont.woff2');
//angular app
const angular = require('angular');
const uirouter = require('angular-ui-router');
const sanitize = require('angular-sanitize');
const resource = require('angular-resource');
const shopApp = angular.module('shopApp', [sanitize,resource,uirouter]);

require('./config')(shopApp);