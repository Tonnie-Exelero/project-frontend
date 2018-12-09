class PendingReviewsCtrl {
    constructor(User, InstructorHome, AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this.api = AppConstants.api;
        this._$scope = $scope;
        this._InHome = InstructorHome;
        this.currentUser = User.current;

        $scope.$watch('User.current', (newUser) => {
            this.currentUser = newUser;
        });

        this._InHome.getPendingReviews('basic').then(
            (reviews) => this.reviews = reviews
        );

        this.downloadFile = function(file){
            this.isSubmitting = true;

            for (let i=0; i<file.length; i++){
                this._InHome.download(file[i]).then(
                    (res) => {
                        console.log('Successful download');
                        window.open(this.api + '/instructor/download?file=' + file[i])
                    },
                    (err) => {
                        this.isSubmitting = false;
                        this.errors = err.data.errors;
                    }
                )
            }
        };
    }
}

export default PendingReviewsCtrl;
