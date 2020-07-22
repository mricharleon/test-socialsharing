'use strict';

/**
 * @ngdoc function
 * @name socialsharingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the socialsharingApp
 */
angular.module('socialsharingApp')
  .controller('MainCtrl', MainCtrl);

function MainCtrl(sharing) {

  var ctrlVm = this;
  ctrlVm.llamarTwitter = llamarTwitter;

  var mockData = {
    'provider': 'twitter',
    'attrs': {
      'socialshareUrl': 'https://www.isyplus.com/ventas/#!/detalle_articulo/4323',
      'socialshareText': 'Cebolla por libra, excelente precio!!',
      'socialshareHashtags': 'isyplus #tiendaonline #loja'
    }
  };

  function llamarTwitter() {

    sharing.shareService(mockData).then(function (resp) {
      console.log('retorno el servicio', resp);
    });

  }

}
