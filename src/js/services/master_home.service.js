/**
 * Created by TONNIE on 2/21/2018.
 */
export default class MasterHome {
    constructor(AppConstants, $http, $q) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;
        this._$q = $q;

    }

    createUser(credentials) {
        return this._$http({
            url: this._AppConstants.api + '/users',
            method: 'POST',
            data: {
                user: credentials
            }
        }).then((res) => res.data);
    }

    getMonthReviews(fields) {
        return this._$http({
            url: this._AppConstants.api + '/master/this_month?type=basic',
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.reviewsCount);
    }

    getCompletedReviews(fields) {
        return this._$http({
            url: this._AppConstants.api + '/master/completed?type=basic',
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.completedCount);
    }

    getCompletedReviewsFiltered(fields) {
        return this._$http({
            url: this._AppConstants.api + '/master/completed?type=basic',
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.completed);
    }

    getInstructorCompletedReviews(name, fields) {
        return this._$http({
            url: this._AppConstants.api + '/master/instructorCompleted?author=' + name,
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.completedCount);
    }

    getInstructorCompletedReviewsFiltered(name, fields) {
        return this._$http({
            url: this._AppConstants.api + '/master/instructorCompleted?author=' + name,
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.completed);
    }

    getInstructors(fields) {
        return this._$http({
            url: this._AppConstants.api + '/master/instructors',
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.instructors);
    }

    getSingleInstructor(name, fields) {
        let deferred = this._$q.defer();

        if (!name.replace(" ", "")) {
            deferred.reject("Video slug is empty");
            return deferred.promise;
        }

        this._$http({
            url: this._AppConstants.api + '/master/singleInstructor?name=' + name,
            method: 'GET',
            data: {basic: fields}
        }).then(
            (res) => deferred.resolve(res.data.instructor),
            (err) => deferred.reject(err)
        );

        return deferred.promise;
    }

    getUnlimitedInstructors(fields) {
        return this._$http({
            url: this._AppConstants.api + '/master/unlimited_instructors',
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.instructors);
    }

    getUsers() {
        return this._$http({
            url: this._AppConstants.api + '/master/allUsers',
            method: 'GET'
        }).then((res) => res.data.users);
    }

    updateUser(user) {
        return this._$http({
            url: this._AppConstants.api + '/master/update?id=' + user._id,
            method: 'PUT',
            data: {user: user}
        }).then((res) => res.data.user);
    }

    removeUser(user) {
        return this._$http({
            url: this._AppConstants.api + '/master/remove?id=' + user._id,
            method: 'DELETE',
            data: {user: user}
        }).then((res) => res.data.user);
    }

    updateSingleUser(user, fields) {
        return this._$http({
            url: this._AppConstants.api + '/master/updateUser?id=' + user._id,
            method: 'PUT',
            data: {user: fields}
        }).then((res) => res.data.user);
    }

    get(id, fields) {
        let deferred = this._$q.defer();

        if (!id.replace(" ", "")) {
            deferred.reject("User Id is empty");
            return deferred.promise;
        }

        this._$http({
            url: this._AppConstants.api + '/master/user?id=' + id,
            method: 'GET',
            data: {basic: fields}
        }).then(
            (res) => deferred.resolve(res.data.user),
            (err) => deferred.reject(err)
        );

        return deferred.promise;
    }
}