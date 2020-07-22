'use strict';

/**
 * @ngdoc service
 * @name socialsharingApp.inicial
 * @description
 * # inicial
 * Factory in the socialsharingApp.
 */
angular.module('socialsharingApp')
  .run('inicial', inicial);

function inicial(ngMeta) {
  ngMeta.init();
};
