import angular from 'angular';

// Create the module where our functionality can attach to
let finishedReviewsModule = angular.module('app.instructor_finished_reviews', []);

// Include our UI-Router config settings
import FinishedReviewsConfig from './finished-reviews.config';
finishedReviewsModule.config(FinishedReviewsConfig);


// Controllers
import FinishedReviewsCtrl from './finished-reviews.controller';
finishedReviewsModule.controller('FinishedReviewsCtrl', FinishedReviewsCtrl);


export default finishedReviewsModule;
