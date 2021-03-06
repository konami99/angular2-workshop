import {Component}    from 'angular2/core';
import {NewItemForm}  from './new-item-form/new-item-form';
import {ItemList}     from './item-list/item-list';
import {ItemComments} from './item-comments/item-comments';
import {ItemButtons}  from './item-buttons/item-buttons';
import {RouteParams}  from "angular2/router";

@Component({
    selector: 'order-view',
    directives: [NewItemForm, ItemList, ItemComments, ItemButtons],
    templateUrl: 'components/order-view/order-view.html'
})

export class OrderView {
    constructor(private routeParams:RouteParams){}
    
    ngOnInit(){
        let tableId = this.routeParams.get('id');
        console.log(tableId);
    }
}