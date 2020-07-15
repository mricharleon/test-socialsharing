'use strict';

describe('Service: services/sharing', function () {

  // load the service's module
  beforeEach(module('socialsharingApp'));

  // instantiate service
  var services/sharing;
  beforeEach(inject(function (_services/sharing_) {
    services/sharing = _services/sharing_;
  }));

  it('should do something', function () {
    expect(!!services/sharing).toBe(true);
  });

});
