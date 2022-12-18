import { CipherService } from './CipherService';

const shift = 3;
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const shiftedAlphabet = 'defghijklmnopqrstuvwxyzabcDEFGHIJKLMNOPQRSTUVWXYZABC';

test('encrypt alphabet', () => {
  const cipherService = new CipherService(shift);
  expect(cipherService.transformMessage(alphabet)).toEqual(shiftedAlphabet);
});

test('decrypt encrypted alphabet', () => {
  const cipherService = new CipherService(-shift);
  expect(cipherService.transformMessage(shiftedAlphabet)).toEqual(alphabet);
});

test('non-latin letters', () => {
  const cipherService = new CipherService(shift);
  const otherLetters = 'äöüßÄÖÜ ,.;:!?';
  expect(cipherService.transformMessage(otherLetters)).toEqual(otherLetters);
});
