import {Component} from "angular2/core";
import {Router}    from "angular2/router";

@Component({
  selector: 'table-view',
  templateUrl: 'components/Tables/table-view/table-view.html'
})

export class TableView {
    
    constructor(private router:Router) {}
    editOrder(tableId){
        this.router.navigate(['OrderView', {id: tableId}]);
    }
}