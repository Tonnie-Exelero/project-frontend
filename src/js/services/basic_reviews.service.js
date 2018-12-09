/**
 * Created by TONNIE on 2/21/2018.
 */
export default class BasicReviews {
    constructor(AppConstants, $http) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;

    }

    getBasicReviews() {
        return this._$http({
            url: this._AppConstants.api + '/basic/reviews',
            method: 'GET'
        }).then((res) => res.data.reviews);
    }

    updateRead(video, field) {
        return this._$http({
            url: this._AppConstants.api + '/basic/update?slug=' + video.slug,
            method: 'PUT',
            data: {basic: field}
        }).then((res) => res.data.review);
    }

    getSingleVideo(video) {
        return this._$http({
            url: this._AppConstants.api + '/basic/getVideo?video=' + video,
            method: 'GET'
        }).then((res) => res.data.theVideo);
    }
}