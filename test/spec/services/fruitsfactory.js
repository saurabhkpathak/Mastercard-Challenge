'use strict';

describe('Service: fruitsFactory', function () {

  // load the service's module
  beforeEach(module('fruitShopApp'));

  // instantiate service
  var fruitsFactory;
  beforeEach(inject(function (_fruitsFactory_) {
    fruitsFactory = _fruitsFactory_;
  }));

  it('should do something', function () {
    expect(!!fruitsFactory).toBe(true);
  });

});
