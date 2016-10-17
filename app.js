angular.module('app', [])
  .controller('TodoCtrl', function TodoCtrl() {
    this.todos = [{
      text: 'learn angular',
      done: true
    }, {
      text: 'build an angular app',
      done: false
    }];
  });
