import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);


import UserService from './user.service';
servicesModule.service('User', UserService);

import JwtService from './jwt.service'
servicesModule.service('JWT', JwtService);

import ProfileService from './profile.service';
servicesModule.service('Profile', ProfileService);

import ArticlesService from './articles.service';
servicesModule.service('Articles', ArticlesService);

import CommentsService from './comments.service';
servicesModule.service('Comments', CommentsService);

import TagsService from './tags.service';
servicesModule.service('Tags', TagsService);

import BasicHomeService from './basic_home.service';
servicesModule.service('BasicHome', BasicHomeService);

import BasicReviewsService from './basic_reviews.service';
servicesModule.service('BasicReviews', BasicReviewsService);

import MasterHomeService from './master_home.service';
servicesModule.service('MasterHome', MasterHomeService);

export default servicesModule;
