function BasicReviewsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.basic_reviews', {
    url: '/basic-reviews',
    controller: 'BasicReviewsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/basic/reviews/reviews.html',
    title: 'Basic reviews'
  });

};

export default BasicReviewsConfig;
