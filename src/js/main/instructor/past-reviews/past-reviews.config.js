function PastReviewsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.past_reviews', {
    url: '/past-reviews/:username',
    controller: 'PastReviewsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/instructor/past-reviews/past-reviews.html',
    title: 'Past reviews',
      resolve: {
          reviews: function(InstructorHome, $state, $stateParams) {
              return InstructorHome.getPastReviews($stateParams.username).then(
                  (reviews) => reviews,
                  (err) => $state.go('app.instructor_home')
              )
          }
      }
  });
}

export default PastReviewsConfig;
