import { CipherService } from './CipherService';

describe('CipherService', () => {
  let cipherService: CipherService;

  const shift = 3;
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shiftedAlphabet = 'defghijklmnopqrstuvwxyzabcDEFGHIJKLMNOPQRSTUVWXYZABC';

  describe(`encryption with a shift of ${shift}`, () => {
    beforeEach(() => cipherService = new CipherService(shift));

    it('letters should be correctly shifted', () => {
      expect(cipherService.transformMessage(alphabet)).toEqual(shiftedAlphabet);
    });
  });

  describe(`decryption with a shift of ${shift}`, () => {
    beforeEach(() => cipherService = new CipherService(-shift));

    it('shifted letters should be correctly shifted back', () => {
      expect(cipherService.transformMessage(shiftedAlphabet)).toEqual(alphabet);
    });
  });

  describe('non-latin letters', () => {
    const otherLetters = 'äöüßÄÖÜ ,.;:!?';

    beforeEach(() => cipherService = new CipherService(shift));

    it('should not be shifted', () => {
      expect(cipherService.transformMessage(otherLetters)).toEqual(otherLetters);
    });
  });
});
