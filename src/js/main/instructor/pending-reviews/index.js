import angular from 'angular';

// Create the module where our functionality can attach to
let pendingReviewsModule = angular.module('app.pending_reviews', []);

// Include our UI-Router config settings
import PendingReviewsConfig from './pending-reviews.config';
pendingReviewsModule.config(PendingReviewsConfig);

// Controllers
import PendingReviewsCtrl from './pending-reviews.controller';
pendingReviewsModule.controller('PendingReviewsCtrl', PendingReviewsCtrl);

export default pendingReviewsModule;
