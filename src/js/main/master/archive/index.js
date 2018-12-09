import angular from 'angular';

// Create the module where our functionality can attach to
let masterArchiveModule = angular.module('app.master_archive', []);

// Include our UI-Router config settings
import MasterArchiveConfig from './archive.config';
masterArchiveModule.config(MasterArchiveConfig);


// Controllers
import MasterArchiveCtrl from './archive.controller';
masterArchiveModule.controller('MasterArchiveCtrl', MasterArchiveCtrl);


export default masterArchiveModule;
