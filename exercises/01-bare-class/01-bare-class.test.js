const BareClass = require('./01-bare-class');

describe('[01] Bare class', () => {
  it('should be defined', () => {
    expect(BareClass).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof BareClass).toBe('function');
  });

  it('should return an object', () => {
    expect(typeof new BareClass()).toBe('object');
  });

  it('should return an instance of BareClass', () => {
    const obj = new BareClass();

    expect(obj instanceof BareClass).toBe(true);
  });
});
