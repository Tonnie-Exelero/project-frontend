function InstructorDashboardConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.instructor_dashboard', {
            url: '/instructor-dashboard/:slug',
            controller: 'InstructorDashboardCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'main/instructor/dashboard/dashboard.html',
            title: 'Instructor dashboard',
            resolve: {
                review: function(InstructorHome, $state, $stateParams) {
                    return InstructorHome.get($stateParams.slug).then(
                        (review) => review,
                        (err) => $state.go('app.instructor_home')
                    )
                }
            }
        })
}

export default InstructorDashboardConfig;
