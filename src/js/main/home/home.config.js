function HomeConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.home', {
            url: '/',
            controller: 'HomeCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'main/home/home.html',
            title: ''
        });
};

export default HomeConfig;
