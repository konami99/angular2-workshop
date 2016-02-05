import {Component} from 'angular2/core';
import {TopNavBar} from './top-navbar';
import {Content} from './content';

@Component({
    selector: 'app',
    
    template: `
        <top-navbar></top-navbar>
        <content></content>
    `,
    directives: [Content, TopNavBar]
})

export class App {}