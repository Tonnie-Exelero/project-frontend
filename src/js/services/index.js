import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);


import UserService from './user.service';
servicesModule.service('User', UserService);

import JwtService from './jwt.service'
servicesModule.service('JWT', JwtService);

import ProfileService from './profile.service';
servicesModule.service('Profile', ProfileService);

import BasicHomeService from './basic_home.service';
servicesModule.service('BasicHome', BasicHomeService);

import BasicReviewsService from './basic_reviews.service';
servicesModule.service('BasicReviews', BasicReviewsService);

export default servicesModule;
