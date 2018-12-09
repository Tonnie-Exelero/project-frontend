class InstructorHomeCtrl {
    constructor(User, AppConstants, $scope, InstructorHome) {
        'ngInject';

        this.appName = AppConstants.appName;
        this.api = AppConstants.api;
        this._$scope = $scope;
        this._InHome = InstructorHome;
        this.currentUser = User.current;

        this.timeStamp = Math.round(new Date().getTime());

        $scope.$watch('User.current', (newUser) => {
            this.currentUser = newUser;
        });

        this._InHome.getReviews('basic').then(
            (reviews) => {
                for (let i=0; i<reviews.length; i++){
                    if (reviews[i].createdAt){
                        reviews[i].createdDate = Date.parse(reviews[i].createdAt)
                    }
                }

                this.reviews = reviews;
            }
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

export default InstructorHomeCtrl;
