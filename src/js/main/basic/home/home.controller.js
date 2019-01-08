class BasicHomeCtrl {
    constructor(AppConstants, $scope, BasicHome, BasicReviews, User, $state, Upload) {
        'ngInject';

        this.appName = AppConstants.appName;
        this.api = AppConstants.api;
        this._$scope = $scope;
        this._User = User;
        this.currentUser = User.current;
        this._Reviews = BasicReviews;
        this._Basic = BasicHome;

        // this._MP3Cutter = MP3Cutter;

        this.formData = {};
        this.videoNames = [];

        // MP3Cutter
        /*this._MP3Cutter.cut({
            src: '',
            target: '',
            start: 0,
            end: 30
        });*/

        this.fileInput = document.getElementsByTagName('input');

        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var firstDay = new Date(y, m, 1);
        var fifteenthDay = new Date(y, m, 15);

        this.fDay = Date.parse(firstDay);
        this.fthDay = Date.parse(fifteenthDay);

        this.checkFiles = function (files) {
            if (files.length > 2){
                alert("You are only allowed to upload a maximum of 2 files. Please select only 2 files.");

                let gogo = document.getElementById('upload');
                gogo.value = '';
            }
        };

        // this._Reviews.getBasicReviews().then(
        //     (reviews) => {
        //         if (reviews.length > 0) {
        //             for (let i=0; i<reviews.length; i++){
        //                 if (reviews[i].reviewed === true && reviews[i].reviewChecked === false){
        //                     this.newReview = true
        //                 }
        //
        //                 reviews[i].gCount = (Date.parse(reviews[i].createdAt) >= this.fDay && Date.parse(reviews[i].createdAt) <= this.fthDay);
        //             }
        //
        //             this.reviews = reviews;
        //
        //             let counts = {};
        //
        //             for (let j=0; j<reviews.length; j++){
        //                 let num = reviews[j].gCount;
        //                 counts[num] = counts[num] ? counts[num] + 1 : 1;
        //             }
        //
        //             if(0 < counts[true] < 2){
        //                 this.showForm = false;
        //             } else if (counts[true] === 0){
        //                 this.showForm = true;
        //             }
        //         } else {
        //             this.showForm = true;
        //         }
        //     }
        // );

        this.upload = function (videos) {
            let files = videos;

            for(let i =0; i < files.length; i++) {
                Upload.upload({
                    url: this.api + '/basic/videoUpload', //webAPI exposed to upload the file
                    data: {file: files[i]} //pass files as data, should be user ng-model
                }).then(function (resp) { //upload function returns a promise
                    if (resp.data.error_code === 0) { //validate success
                        console.log('Clip(s) uploaded successfully.');
                    } else {
                        console.log('An error occurred');
                    }
                }, function (resp) { //catch error
                    console.log('Error status: ' + resp.status);
                }, function (evt) {
                    console.log(evt);
                    let progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('Progress: ' + progressPercentage + '% ');
                });

                this.videoNames.push(files[i].name);
            }
        };

        this.submitForm = function()
        {
            this.isSubmitting = true;

            if(this.formData.video){
                this.upload(this.formData.video);
            }

            this.formData = {
                category: this.formData.category,
                video: this.videoNames,
                notes: this.formData.notes,
                name: this.currentUser.username,
                clipName: this.videoNames,
                type: "basic",
                reviewed: false
            };

            this._Basic.add(this.formData).then(
                (res) => {
                    this.success_upload = "Audio Clip(s) successfully uploaded.";

                    this.formData = {};
                    // $state.reload();
                },
                (err) => {
                    this.isSubmitting = false;
                    this.errors = err.data.errors;

                    this.error_upload = "There was an error while uploading. Please try again.";
                }
            )
        }
    }
}

export default BasicHomeCtrl;
