require('assets/css/app.css');
require('expose?Zone!zone.js');
require('reflect-metadata');
var app_1 = require('./components/app');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
browser_1.bootstrap(app_1.App, [router_1.ROUTER_PROVIDERS]);
//# sourceMappingURL=index.js.map