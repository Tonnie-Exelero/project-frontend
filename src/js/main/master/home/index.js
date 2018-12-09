import angular from 'angular';

// Create the module where our functionality can attach to
let masterHomeModule = angular.module('app.master_home', []);

// Include our UI-Router config settings
import MasterHomeConfig from './home.config';
masterHomeModule.config(MasterHomeConfig);

// Controllers
import MasterHomeCtrl from './home.controller';
masterHomeModule.controller('MasterHomeCtrl', MasterHomeCtrl);


export default masterHomeModule;
