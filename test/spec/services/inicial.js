'use strict';

describe('Service: inicial', function () {

  // load the service's module
  beforeEach(module('socialsharingApp'));

  // instantiate service
  var inicial;
  beforeEach(inject(function (_inicial_) {
    inicial = _inicial_;
  }));

  it('should do something', function () {
    expect(!!inicial).toBe(true);
  });

});
