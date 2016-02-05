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
var core_1 = require('angular2/core');
var new_item_form_1 = require('./new-item-form/new-item-form');
var item_list_1 = require('./item-list/item-list');
var item_comments_1 = require('./item-comments/item-comments');
var item_buttons_1 = require('./item-buttons/item-buttons');
var OrderView = (function () {
    function OrderView() {
    }
    OrderView = __decorate([
        core_1.Component({
            selector: 'order-view',
            directives: [new_item_form_1.NewItemForm, item_list_1.ItemList, item_comments_1.ItemComments, item_buttons_1.ItemButtons],
            templateUrl: 'components/order-view/order-view.html'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderView);
    return OrderView;
})();
exports.OrderView = OrderView;
//# sourceMappingURL=order-view.js.map