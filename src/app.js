function HomeController ($log, $auth, $http) {
    var vm = this;
    this.title = 'home controller';
    this.alert = '';
    this.success = '';
    this.$auth = $auth;
    this.fullName = '';

    // Defaults
    this.username = 'editor';
    this.password = 'editor';

    this.login = function () {
        var userInfo = {username: vm.username, password: vm.password};
        $auth.login(userInfo)
            .then(function () {
                vm.alert = '';
                vm.success = 'Login successful';

                // Now go get profile information
                $http.get('http://127.0.0.1:6543/api/profile')
                    .then(function (response) {
                        var rd = response.data;
                        vm.fullName = rd.firstName + ' ' + rd.lastName;
                    })
            })
            .catch(function (response) {
                // Handle errors here, such as displaying a notification
                // for invalid email and/or password.
                vm.success = '';
                vm.alert = 'Failed login';
                $log.debug('Failed login with response', response.data);
            });
    };

    this.logout = function () {
        $auth.logout()
            .then(function () {
                vm.success = 'You have been logged out';
                vm.alert = '';
            });
    };

    this.getProtected = function () {
        $http.get('http://127.0.0.1:6543/api/protected')
            .then(function (response) {
                var m = 'Successfully got /api/protected user: ';
                vm.success =  m + response.data.user;
                vm.alert = '';
            })
            .catch(function (response) {
                vm.success = '';
                var status = response.status;
                vm.alert = 'Failed with HTTP status code:' + status;
            })
    }
}
function ModuleConfig ($authProvider) {
    $authProvider.loginUrl = 'http://127.0.0.1:6543/api/login';
    $authProvider.authToken = '';
}

angular.module('app', ['satellizer'])
    .config(ModuleConfig)
    .controller('HomeController', HomeController);