import angular from 'angular';

// Create the module where our functionality can attach to
let basicHomeModule = angular.module('app.basic_home', ['ngFileUpload']);

// Include our UI-Router config settings
import BasicHomeConfig from './home.config';
basicHomeModule.config(BasicHomeConfig);

// Controllers
import BasicHomeCtrl from './home.controller';
basicHomeModule.controller('BasicHomeCtrl', BasicHomeCtrl, ['Upload']);

// Directives
basicHomeModule.directive("filesInput", function() {
    return {
        require: "ngModel",
        link: function postLink(scope,elem,attrs,ngModel) {
            elem.on("change", function(e) {
                var files = elem[0].files;
                ngModel.$setViewValue(files);
            })
        }
    }
});

basicHomeModule.directive('onFileChange', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var onChangeHandler = scope.$eval(attrs.onFileChange);

            element.bind('change', function() {
                scope.$apply(function() {
                    var files = element[0].files;
                    if (files) {
                        onChangeHandler(files);
                    }
                });
            });

        }
    };
});
export default basicHomeModule;
