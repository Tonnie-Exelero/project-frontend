function FinishedReviewsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.finished_reviews', {
    url: '/finished-reviews',
    controller: 'FinishedReviewsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/instructor/finished-reviews/finished-reviews.html',
    title: 'Finished reviews'
  });
}

export default FinishedReviewsConfig;
