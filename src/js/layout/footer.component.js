class AppFooterCtrl {
    constructor(AppConstants, User, $scope) {
        'ngInject';
        this.appName = AppConstants.appName;
        this.currentUser = User.current;

        $scope.$watch('User.current', (newUser) => {
            this.currentUser = newUser;
        });

        // Get today's date to generate the year
        this.date = new Date();
    }
}

let AppFooter = {
    controller: AppFooterCtrl,
    templateUrl: 'layout/footer.html'
};

export default AppFooter;
