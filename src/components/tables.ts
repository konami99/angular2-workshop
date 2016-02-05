import {Component} from "angular2/core";
import {TableView} from './table-view';

@Component({
  selector: 'tables',
  template: `
    <div class="table-container">
      <table-view></table-view>
    </div>
    `,
    directives:[TableView]
    
})

export class Tables {}