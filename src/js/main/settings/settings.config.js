function SettingsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.settings', {
    url: '/settings',
    controller: 'SettingsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/settings/settings.html',
    title: 'Settings',
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(true);
      }
    }
  });
};

export default SettingsConfig;
