/**
 * Created by TONNIE on 2/20/2018.
 */
export default class BasicHome {
    constructor (AppConstants, $http) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;

    }

    add(fields){
        return this._$http({
            url: this._AppConstants.api + '/basic/upload',
            method: 'POST',
            data: {basic: fields}
        }).then((res) => res.data);
    }
}
