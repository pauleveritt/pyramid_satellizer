function HomeController ($log, $auth) {
    this.title = "home controller";

    // Defaults
    this.username = "admin";
    this.password = "admin";

    this.login = function () {
        $auth.login({username: username, password: password})
            .then(function (response) {
                // Redirect user here after a successful log in.
            })
            .catch(function (response) {
                // Handle errors here, such as displaying a notification
                // for invalid email and/or password.
            });
    }
}
function ModuleConfig ($authProvider) {


}
angular.module('app', ['satellizer'])
    .config(ModuleConfig)
    .controller("HomeController", HomeController);