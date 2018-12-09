import angular from 'angular';

// Create the module where our functionality can attach to
let instructorDashboardModule = angular.module('app.instructor_dashboard', ['ngFileUpload']);

// Include our UI-Router config settings
import InstructorDashboardConfig from './dashboard.config';
instructorDashboardModule.config(InstructorDashboardConfig);

// Controllers
import InstructorDashboardCtrl from './dashboard.controller';
instructorDashboardModule.controller('InstructorDashboardCtrl', InstructorDashboardCtrl, ['Upload']);


export default instructorDashboardModule;
