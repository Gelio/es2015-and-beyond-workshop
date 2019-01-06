const {
  regularAge,
  templateAge,
  multilineString,
  multilineTemplateString
} = require('./11-template-strings');

describe('[11] Template strings', () => {
  describe('templateAge', () => {
    it('should be the same as regularAge', () => {
      expect(templateAge).toBe(regularAge);
    });
  });

  describe('multilineTemplateString', () => {
    it('should be the same as multilineString', () => {
      expect(multilineTemplateString).toBe(multilineString);
    });
  });
});
