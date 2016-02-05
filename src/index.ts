import 'assets/css/app.css';
import 'expose?Zone!zone.js';
import 'reflect-metadata';
import { App } from './components/app';
import { bootstrap } from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';


bootstrap(App, [ROUTER_PROVIDERS]);