class BasicReviewsCtrl {
    constructor(AppConstants, $scope, $state, BasicReviews, $stateParams) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this.api = AppConstants.api;
        this._Reviews = BasicReviews;

        $(document).ready(function() {
            $('#datatables').DataTable();
        } );

        this._Reviews.getBasicReviews().then(
            (reviews) => {
                this.reviews = reviews;

                this.videos = [this.reviews.video];
            }
        );

        this.downloadFile = function(file){
            this.isSubmitting = true;

            for (let i=0; i<file.length; i++){
                this._Reviews.download(file[i]).then(
                    (res) => {
                        console.log('Successful download');
                        window.open(this.api + '/basic/download?file=' + file[i])
                    },
                    (err) => {
                        this.isSubmitting = false;
                        this.errors = err.data.errors;
                    }
                )
            }
        };

        this.downloadReview = function(file){
            this.isSubmitting = true;

            this._Reviews.download(file).then(
                (res) => {
                    console.log('Successful download');
                    window.open(this.api + '/instructor/download?file=' + file)
                },
                (err) => {
                    this.isSubmitting = false;
                    this.errors = err.data.errors;
                }
            )
        };
    }
}

export default BasicReviewsCtrl;
