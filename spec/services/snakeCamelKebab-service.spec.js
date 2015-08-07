describe('Service: snakeCamelKebabService', function() {
  var snakeCamelKebab;
  beforeEach(module('times.snakeCamelKebab'));
  beforeEach(inject(function(_snakeCamelKebabService_) {
  snakeCamelKebab = _snakeCamelKebabService_;
  }));

  it('should attach a list of awesomeThings to the service', function() {
    expect(snakeCamelKebab.awesomeThings.length).toBe(3);
  });

});
