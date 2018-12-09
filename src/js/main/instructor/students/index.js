import angular from 'angular';

// Create the module where our functionality can attach to
let instructorStudentsModule = angular.module('app.instructor_students', []);

// Include our UI-Router config settings
import InstructorStudentsConfig from './students.config';
instructorStudentsModule.config(InstructorStudentsConfig);

// Controllers
import InstructorStudentsCtrl from './students.controller';
instructorStudentsModule.controller('InstructorStudentsCtrl', InstructorStudentsCtrl);

export default instructorStudentsModule;
