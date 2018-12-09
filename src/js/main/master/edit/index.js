import angular from 'angular';

// Create the module where our functionality can attach to
let masterEditModule = angular.module('app.master_edit', []);

// Include our UI-Router config settings
import MasterEditConfig from './edit.config';
masterEditModule.config(MasterEditConfig);

// Controllers
import MasterEditCtrl from './edit.controller';
masterEditModule.controller('MasterEditCtrl', MasterEditCtrl, []);


export default masterEditModule;
