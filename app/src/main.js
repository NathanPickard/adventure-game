import angular from 'angular';
import app from './app';
import template from './main.html';
import './css/main.css';

document.body.innerHTML = template;
angular.bootstrap(document, [app]);