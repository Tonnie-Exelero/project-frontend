function MasterEditConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.master_edit', {
            url: '/master-edit/:id',
            controller: 'MasterEditCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'main/master/edit/edit.html',
            title: 'Edit',
            resolve: {
                user: function(MasterHome, $state, $stateParams) {
                    return MasterHome.get($stateParams.id).then(
                        (user) => user,
                        (err) => $state.go('app.master_home')
                    )
                }
            }
        })
}

export default MasterEditConfig;
