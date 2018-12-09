class MasterInstructorCtrl {
  constructor(User, MasterHome, AppConstants, $scope, instructor) {
      'ngInject';

      this.appName = AppConstants.appName;
      this._$scope = $scope;
      this._Dash = MasterHome;
      this.instructor = instructor;

      const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
      ];

      const d = new Date();
      this.month = monthNames[d.getMonth()];
      this.year = d.getFullYear();

      const date = new Date(), y = date.getFullYear(), m = date.getMonth();
      this.firstDay = new Date(y, m, 1);
      this.lastDay = new Date(y, m + 1, 0);

      this._Dash.getInstructorCompletedReviews(this.instructor.username).then(
          (completedCount) => this.completedCount = completedCount
      );

      this.filterMonth = function (n) {

          let go = document.getElementById('report-month');
          let go1 = document.getElementById('report-month1');
          go.style.display = "none";
          go1.style.display = "none";

          let numCount = [];

          this.month = monthNames[n];

          this.firstDay = new Date(y, n, 1);
          this.firDayUnix = new Date(this.firstDay).getTime();

          this.lastDay = new Date(y, n + 1, 0);
          this.lasDayUnix = new Date(this.lastDay).getTime();

          this._Dash.getInstructorCompletedReviewsFiltered(this.instructor.username).then(
              (completed) => {
                  for (let i=0; i<completed.length; i++){

                      let completedDate = Date.parse(completed[i].updatedAt);

                      if (completedDate > this.firDayUnix && completedDate < this.lasDayUnix){
                          numCount.push(completed[i]);
                      }
                  }

                  this.completedCount = numCount.length;
              }
          );
      };

      this._Dash.getInstructors().then(
          (instructors) => this.instructors = instructors
      );
  }
}

export default MasterInstructorCtrl;
