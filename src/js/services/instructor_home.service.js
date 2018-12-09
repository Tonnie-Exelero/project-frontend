/**
 * Created by TONNIE on 3/9/2018.
 */
export default class InstructorHome {
    constructor(AppConstants, $http, $q) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;
        this._$q = $q;
    }

    getReviews(type, fields) {
        return this._$http({
            url: this._AppConstants.api + '/instructor/reviews?type=' + type,
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.reviews);
    }

    getUnlimitedReviews(type, inst, fields) {
        return this._$http({
            url: this._AppConstants.api + '/instructor/reviews?type=' + type + '&instructor=' + inst,
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.reviews);
    }

    get(slug, fields) {
        let deferred = this._$q.defer();

        if (!slug.replace(" ", "")) {
            deferred.reject("Video slug is empty");
            return deferred.promise;
        }

        this._$http({
            url: this._AppConstants.api + '/instructor/review?slug=' + slug,
            method: 'GET',
            data: {basic: fields}
        }).then(
            (res) => deferred.resolve(res.data.review),
            (err) => deferred.reject(err)
        );

        return deferred.promise;
    }

    getPastReviews(author, fields) {
        let deferred = this._$q.defer();

        if (!author.replace(" ", "")) {
            deferred.reject("Video slug is empty");
            return deferred.promise;
        }

        this._$http({
            url: this._AppConstants.api + '/instructor/past_reviews?author=' + author,
            method: 'GET',
            data: {basic: fields}
        }).then(
            (res) => deferred.resolve(res.data.reviews),
            (err) => deferred.reject(err)
        );

        return deferred.promise;
    }

    getPendingReviews(type, fields) {
        return this._$http({
            url: this._AppConstants.api + '/instructor/pending_reviews?type=' + type,
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.reviews);
    }

    getFinishedReviews(type, fields) {
        return this._$http({
            url: this._AppConstants.api + '/instructor/finished_reviews?type=' + type,
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.reviews);
    }

    getUnlimitedPendingReviews(type, inst, fields) {
        return this._$http({
            url: this._AppConstants.api + '/instructor/pending_reviews?type=' + type + '&instructor=' + inst,
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.reviews);
    }

    getUnlimitedFinishedReviews(type, inst, fields) {
        return this._$http({
            url: this._AppConstants.api + '/instructor/finished_reviews?type=' + type + '&instructor=' + inst,
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.reviews);
    }

    getStudents(role, fields) {
        return this._$http({
            url: this._AppConstants.api + '/instructor/students?role=' + role,
            method: 'GET',
            data: {basic: fields}
        }).then((res) => res.data.students);
    }

    download(file){
        return this._$http({
            url: this._AppConstants.api + '/instructor/download?file=' + file,
            method: 'GET'
        }).then((res) => res.data);
    }

    update(video, field) {
        return this._$http({
            url: this._AppConstants.api + '/instructor/update?slug=' + video.slug,
            method: 'PUT',
            data: {basic: field}
        }).then((res) => res.data.review);
    }
}