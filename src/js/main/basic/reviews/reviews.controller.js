class BasicReviewsCtrl {
    constructor(AppConstants, $scope, $state, BasicReviews, InstructorHome, $stateParams) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this.api = AppConstants.api;
        this._Reviews = BasicReviews;
        this._InHome = InstructorHome;

        this._Reviews.getBasicReviews().then(
            (reviews) => {
                this.reviews = reviews;

                this.videos = [this.reviews.video];
            }
        );

        /*var myvid = document.getElementById('myvideos');

        myvid.addEventListener('ended', function(e) {
            // get the active source and the next video source.
            // I set it so if there's no next, it loops to the first one
            var activesource = document.querySelector("#myvideo source.active");
            var nextsource = document.querySelector("#myvideo source.active + source") || document.querySelector("#myvideo source:first-child");

            // deactivate current source, and activate next one
            activesource.className = "";
            nextsource.className = "active";

            // update the video source and play
            myvid.src = nextsource.src;
            myvid.play();
        });*/

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

        this.downloadReview = function(file){
            this.isSubmitting = true;

            this._InHome.download(file).then(
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

        this.markRead = function (video) {
            this.isSubmitting = true;

            let videoChecked = {
                reviewChecked: true
            };

            this._Reviews.updateRead(video, videoChecked).then(
                (res) => {
                    console.log('Marked as read');

                    $state.reload();
                },

                (err) => {
                    this.isSubmitting = false;
                    this.errors = err.data.errors;
                }
            )
        }
    }
}

export default BasicReviewsCtrl;
