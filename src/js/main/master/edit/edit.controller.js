class MasterEditCtrl {
    constructor(User, AppConstants, $scope, user, MasterHome, $state) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._Master = MasterHome;
        this._$state = $state;
        this.currentUser = User.current;

        this.formData = {};

        $scope.$watch('User.current', (newUser) => {
            this.currentUser = newUser;
        });

        this.user = user;

        this.updateUser = function() {
            this.isSubmitting = true;

            user.fullName = this.user.fullName;
            user.username = this.user.username;
            user.role = this.user.role;
            user.bio = this.user.bio;
            user.email = this.user.email;
            user.password = this.user.password;

            this._Master.updateUser(user).then(
                (res) => {
                    this.success = 'User successfully updated';

                    this._$state.go('app.master_home')
                },

                (err) => {
                    this.isSubmitting = false;
                    this.errors = err.data.errors;
                }
            )
        };

        this.removeUser = function () {
            this._Master.removeUser(user).then(
                (res) => {
                    this.successDelete = 'User successfully deleted';

                    this._$state.go('app.master_home')
                },

                (err) => {
                    this.isSubmitting = false;
                    this.errors = err.data.errors;
                }
            )
        };
    }
}

export default MasterEditCtrl;