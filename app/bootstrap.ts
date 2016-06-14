///<reference path="./../typings/main.d.ts"/>
import 'reflect-metadata'
import 'es6-shim'
import 'rxjs'
import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import { bootstrap } from '@angular/platform-browser-dynamic'
import {AppComponent} from './main'
import {DatabindingExampleComponent} from './DatabindingExampleComponent'
import {provide, bind} from '@angular/core'

//import {LocationStrategy, PathLocationStrategy} from '@angular/platform/common';
import {
  LocationStrategy,
  PathLocationStrategy}
from '@angular/common';
//LocationStrategy, HashLocationStrategy
import {ROUTER_PROVIDERS} from '@angular/router';

let config = {
  api: 'http://api',
  env: 'des'
}

bootstrap(AppComponent, [
  provide('config', {useValue: config}),
  ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: PathLocationStrategy})
])
