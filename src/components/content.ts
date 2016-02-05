import {Component} from 'angular2/core';
import {Tables} from './tables';

@Component({
    selector: 'content',
    template: `<div class="container">
        <tables></tables>
    </div>`,
    directives: [Tables]
})

export class Content {}