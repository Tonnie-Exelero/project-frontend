class MasterArchiveCtrl {
    constructor(User, MasterHome, AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._Dash = MasterHome;

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const d = new Date();
        this.month = monthNames[d.getMonth()];
        this.year = d.getFullYear();

        const date = new Date(), y = date.getFullYear(), m = date.getMonth();
        this.firstDay = new Date(y, m, 1);
        this.fDayUnix = new Date(this.firstDay).getTime()/1000;

        this.lastDay = new Date(y, m + 1, 0);
        this.lDayUnix = new Date(this.lastDay).getTime()/1000;

        this._Dash.getMonthReviews().then(
            (reviewsCount) => this.reviewsCount = reviewsCount
        );

        this._Dash.getCompletedReviews().then(
            (completedCount) => this.completedCount = completedCount
        );

        this.filterMonth = function (n) {

            let go = document.getElementById('report-month');
            let go1 = document.getElementById('report-month1');
            let go2 = document.getElementById('report-month2');
            go.style.display = "none";
            go1.style.display = "none";
            go2.style.display = "none";

            let numCount = [];

            this.month = monthNames[n];

            this.firstDay = new Date(y, n, 1);
            this.firDayUnix = new Date(this.firstDay).getTime();

            this.lastDay = new Date(y, n + 1, 0);
            this.lasDayUnix = new Date(this.lastDay).getTime();

            this._Dash.getCompletedReviewsFiltered().then(
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

export default MasterArchiveCtrl;
