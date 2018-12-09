import angular from 'angular';

// Create the module where our functionality can attach to
let instructorHomeModule = angular.module('app.instructor_home', []);

// Include our UI-Router config settings
import InstructorHomeConfig from './home.config';
instructorHomeModule.config(InstructorHomeConfig);

// Controllers
import InstructorHomeCtrl from './home.controller';
instructorHomeModule.controller('InstructorHomeCtrl', InstructorHomeCtrl);


export default instructorHomeModule;
