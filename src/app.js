function HomeController ($log, $auth, $http) {
    var vm = this;
    this.title = 'home controller';
    this.alert = '';
    this.success = '';
    this.$auth = $auth;
    this.fullName = '';

    // Defaults
    this.username = 'admin';
    this.password = 'admin';

    this.login = function () {
        var userInfo = {login: vm.username, password: vm.password,
                        'form.submitted': 'submitted'};
        $auth.login(userInfo, {method: 'POST', contentType: "application/x-www-form-urlencoded; charset=UTF-8"})
            .then(function () {
                vm.alert = '';
                vm.success = 'Login successful';

                // Now go get profile information
                $http.get('http://127.0.0.1:6543/profiles/' + vm.username)
                    .then(function (response) {
                        var rd = response.data;
                        vm.fullName = rd.profile.title;
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
        $http.get('http://127.0.0.1:6543/communities/active_communities.html')
            .then(function (response) {
                var m = 'Successfully got active communities: first community name is ';
                vm.success =  m + response.data.communities[0].name;
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
    $authProvider.loginUrl = 'http://127.0.0.1:6543/login.html';
    $authProvider.authToken = '';
}

angular.module('app', ['satellizer'])
    .config(ModuleConfig)
    .controller('HomeController', HomeController);
