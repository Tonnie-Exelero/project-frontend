class MasterHomeCtrl {
    constructor(AppConstants, $scope, $state, MasterHome) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._$state = $state;
        this._Master = MasterHome;
        this.authType = 'app.register';

        this.formData = {};

        this._Master.getUsers().then(
            (users) => this.users = users
        );

        this._Master.getUnlimitedInstructors().then(
            (instructors) => this.instructors = instructors
        );

        this.deactivateUser = function (user) {
            this.isSubmitting = true;

            user.active = false;

            this._Master.updateUser(user).then(
                (user) => {
                    console.log('User deactivated')
                },
                (err) => {
                    this.isSubmitting = false;
                    this.errors = err.data.errors;
                }
            )
        };

        this.activateUser = function (user) {
            this.isSubmitting = true;

            user.active = true;

            this._Master.updateUser(user).then(
                (user) => {
                    console.log('User activated')
                },
                (err) => {
                    this.isSubmitting = false;
                    this.errors = err.data.errors;
                }
            )
        }
    }

    submitForm() {
        this.isSubmitting = true;

        this.formData.active = true;

        this._Master.createUser(this.formData).then(
            (res) => {
                this.success = "Instructor successfully added.";

                this.formData = {};
                this._$state.reload();
            },
            (err) => {
                this.isSubmitting = false;
                this.errors = err.data.errors;
            }
        );

        this._Master.getUsers().then(
            (users) => this.users = users
        );
    }
}

export default MasterHomeCtrl;
