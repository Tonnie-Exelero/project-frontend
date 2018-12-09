class InstructorDashboardCtrl {
    constructor(User, AppConstants, $scope, review, InstructorHome, Upload) {
        'ngInject';

        this.appName = AppConstants.appName;
        this.api = AppConstants.api;
        this._$scope = $scope;
        this._InHome = InstructorHome;
        this.currentUser = User.current;

        this.formData = {};

        this.fileInput = document.getElementById('upload');

        $scope.$watch('User.current', (newUser) => {
            this.currentUser = newUser;
        });

        this.review = review;

        var myvid = document.getElementById('myvideo');

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
        });

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

        this.updateReview = function() {
            this.isSubmitting = true;

            if (this.uploadForm.file.$valid) { //check if from is valid
                this.upload(this.formData.video); //call upload function
            }

            review = {
                author: this.review.author,
                reviewed: true,
                reviewedBy: User.current.username,
                reviewChecked: false,
                video2: this.fileInput.files[0].name,
                notes2: this.formData.notes2
            };

            this._InHome.update(this.review, review).then(
                (res) => {
                    this.success = 'Sent! Your video review has been uploaded successfully';

                    this.formData = {};
                },

                (err) => {
                    this.isSubmitting = false;
                    this.errors = err.data.errors;
                }
            )
        };

        this.upload = function (file) {
            Upload.upload({
                url: this.api + '/basic/videoUpload', //webAPI exposed to upload the file
                data: {file: this.formData.video} //pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                if (resp.data.error_code === 0) { //validate success
                    console.log(resp.config.data.file.name + ' uploaded successfully.');
                } else {
                    console.log('An error occurred');
                }
            }, function (resp) { //catch error
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                console.log(evt);
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('Progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        };
    }
}

export default InstructorDashboardCtrl;