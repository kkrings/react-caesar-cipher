export const numLatinLetters = 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;

export class CipherService {
  constructor(private readonly shift: number) {}

  transformMessage(message: string): string {
    return Array.from(message)
      .map(letter => this.tryTransformLetter(letter))
      .join('');
  }

  private tryTransformLetter(letter: string): string {
    if (/[A-Z]/.test(letter)) {
      return this.transformLatinLetter(letter, 'A');
    }

    if (/[a-z]/.test(letter)) {
      return this.transformLatinLetter(letter, 'a');
    }

    return letter;
  }

  private transformLatinLetter(letter: string, offset = 'A'): string {
    const charCodeOffset = offset.charCodeAt(0);

    let shift = (
      (letter.charCodeAt(0) - charCodeOffset + this.shift) % numLatinLetters
    );

    shift = shift >= 0 ? shift : numLatinLetters + shift;

    return String.fromCharCode(charCodeOffset + shift);
  }
}
