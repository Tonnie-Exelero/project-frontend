import angular from 'angular';

// Create the module where our functionality can attach to
let masterDashboardModule = angular.module('app.master_dashboard', []);

// Include our UI-Router config settings
import MasterDashboardConfig from './dashboard.config';
masterDashboardModule.config(MasterDashboardConfig);


// Controllers
import MasterDashboardCtrl from './dashboard.controller';
masterDashboardModule.controller('MasterDashboardCtrl', MasterDashboardCtrl);


export default masterDashboardModule;
