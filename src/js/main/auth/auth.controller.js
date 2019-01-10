class AuthCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this._$state = $state;

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');
  }

  submitForm() {
    this.isSubmitting = true;

    this.formData = {
        role: "Basic_User",
        username: this.formData.username,
        email: this.formData.email,
        password: this.formData.password
    };

    this._User.attemptAuth(this.authType, this.formData).then(
      (res) => {
          this._$state.go('app.basic_home');
      },
      (err) => {
        this.isSubmitting = false;
        this.anError = "The Email or Password was incorrect.";
        console.log(err.data.errors);
        // this.errors = err.data.errors;
      }
    )
  }
}

export default AuthCtrl;
