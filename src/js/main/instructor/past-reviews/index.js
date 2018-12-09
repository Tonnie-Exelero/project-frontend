import angular from 'angular';

// Create the module where our functionality can attach to
let pastReviewsModule = angular.module('app.past_reviews', []);

// Include our UI-Router config settings
import PastReviewsConfig from './past-reviews.config';
pastReviewsModule.config(PastReviewsConfig);

// Controllers
import PastReviewsCtrl from './past-reviews.controller';
pastReviewsModule.controller('PastReviewsCtrl', PastReviewsCtrl);

export default pastReviewsModule;
