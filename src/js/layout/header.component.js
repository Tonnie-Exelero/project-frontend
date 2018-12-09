class AppHeaderCtrl {
    constructor(AppConstants, User, $scope, $state) {
        'ngInject';

        this.appName = AppConstants.appName;
        this.currentUser = User.current;
        this._$state = $state;

        $scope.$watch('User.current', (newUser) => {
            this.currentUser = newUser;
        });

        this.logout = User.logout.bind(User);
    }
}

let AppHeader = {
    controller: AppHeaderCtrl,
    templateUrl: 'layout/header.html'
};

export default AppHeader;
