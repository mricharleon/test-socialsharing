'use strict';

describe('Service: sharing', function () {

  // load the service's module
  beforeEach(module('socialsharingApp'));

  // instantiate service
  var sharing;
  beforeEach(inject(function (_sharing_) {
    sharing = _sharing_;
  }));

  it('should do something', function () {
    expect(!!sharing).toBe(true);
  });

});
