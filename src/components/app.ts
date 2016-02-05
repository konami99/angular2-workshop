import {RouteConfig, RouterOutlet} from 'angular2/router';
import {Component}                 from 'angular2/core';
import {TopNavBar}                 from './top-navbar/top-navbar';
import {Tables}                    from './tables/tables';
import {OrderView}                 from './order-view/order-view';
import {OrderHistory}              from './order-history/order-history';

@RouteConfig([
    {path:'/', name: 'root', redirectTo:['Tables']},
    {path:'/tables', name: 'Tables', component: Tables},
    {path:'/order/:id', name:'OrderView', component: OrderView},
    {path:'/history', name: 'OrderHistory', component: OrderHistory}
])

@Component({
    selector: 'app',
    
    template: `
        <top-navbar></top-navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [TopNavBar, Tables, OrderView, OrderHistory, RouterOutlet]
})

export class App {}