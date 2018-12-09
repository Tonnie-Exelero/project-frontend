import angular from 'angular';

// Create the module where our functionality can attach to
let basicReviewsModule = angular.module('app.basic_reviews', []);

// Include our UI-Router config settings
import BasicReviewsConfig from './reviews.config';
basicReviewsModule.config(BasicReviewsConfig);

// Controllers
import BasicReviewsCtrl from './reviews.controller';
basicReviewsModule.controller('BasicReviewsCtrl', BasicReviewsCtrl);


export default basicReviewsModule;
