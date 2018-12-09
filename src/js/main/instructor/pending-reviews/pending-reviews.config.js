function PendingReviewsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.pending_reviews', {
    url: '/pending-reviews',
    controller: 'PendingReviewsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/instructor/pending-reviews/pending-reviews.html',
    title: 'Pending reviews'
  });

};

export default PendingReviewsConfig;
