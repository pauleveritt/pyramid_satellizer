function HomeController ($log) {
    this.title = "home controller";
}
function ModuleConfig ($authProvider) {


}
angular.module('app', ['satellizer'])
    .config(ModuleConfig)
    .controller("HomeController", HomeController);