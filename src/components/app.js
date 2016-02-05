var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('angular2/router');
var core_1 = require('angular2/core');
var top_navbar_1 = require('./top-navbar/top-navbar');
var tables_1 = require('./tables/tables');
var order_view_1 = require('./order-view/order-view');
var order_history_1 = require('./order-history/order-history');
var App = (function () {
    function App() {
    }
    App = __decorate([
        router_1.RouteConfig([
            { path: '/', name: 'root', redirectTo: ['Tables'] },
            { path: '/tables', name: 'Tables', component: tables_1.Tables },
            { path: '/order:id', name: 'OrderView', component: order_view_1.OrderView },
            { path: '/history', name: 'OrderHistory', component: order_history_1.OrderHistory }
        ]),
        core_1.Component({
            selector: 'app',
            template: "\n        <top-navbar></top-navbar>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
            directives: [top_navbar_1.TopNavBar, tables_1.Tables, order_view_1.OrderView, order_history_1.OrderHistory, router_1.RouterOutlet]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.js.map