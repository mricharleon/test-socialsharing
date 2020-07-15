'use strict';

/**
 * @ngdoc service
 * @name socialsharingApp.sharing
 * @description
 * # sharing
 * Service in the socialsharingApp.
 */

angular.module('socialsharingApp')
  .service('sharing', sharing);

function sharing(Socialshare) {

  var service = {
    shareService: shareService,
  };

  return service;

  function shareService(data) {

    Socialshare.share(data);

  }


}
