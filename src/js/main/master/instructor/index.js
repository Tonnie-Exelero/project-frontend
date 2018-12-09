import angular from 'angular';

// Create the module where our functionality can attach to
let masterInstructorModule = angular.module('app.master_instructor', []);

// Include our UI-Router config settings
import MasterInstructorConfig from './instructor.config';
masterInstructorModule.config(MasterInstructorConfig);


// Controllers
import MasterInstructorCtrl from './instructor.controller';
masterInstructorModule.controller('MasterInstructorCtrl', MasterInstructorCtrl);


export default masterInstructorModule;
