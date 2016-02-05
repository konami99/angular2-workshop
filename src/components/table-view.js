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
var core_1 = require("angular2/core");
var TableView = (function () {
    function TableView() {
    }
    TableView = __decorate([
        core_1.Component({
            selector: 'table-view',
            template: "\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"thumbnail\">\n            <div class=\"caption\">\n              <h4 class=\"pull-right\"><span class=\"glyphicon glyphicon-time\"></span>&nbsp; 12:00</h4>\n              <h3>Table #1</h3>\n              <h4><span class=\"glyphicon glyphicon-cutlery\"></span>&nbsp; 4</h4>\n              <h4><span class=\"glyphicon glyphicon-usd\"></span>&nbsp; 320</h4>\n              <p>\n                <a href=\"#\" class=\"btn btn-info\" role=\"button\">\n                  <span class=\"glyphicon glyphicon-edit\"></span>\n                </a>\n                <a href=\"#\" class=\"btn btn-danger\" role=\"button\">\n                  <span class=\"glyphicon glyphicon-shopping-cart\"></span>\n                </a>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      "
        }), 
        __metadata('design:paramtypes', [])
    ], TableView);
    return TableView;
})();
exports.TableView = TableView;
//# sourceMappingURL=table-view.js.map