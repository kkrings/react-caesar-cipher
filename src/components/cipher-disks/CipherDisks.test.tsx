import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CipherDisks } from './CipherDisks';

describe('CipherDisks', () => {
  const angleDeg = 45;

  beforeEach(() => {
    render(<CipherDisks angleDeg={angleDeg} />);
  });

  it('style should contain transform property', () => {
    expect(screen.getByRole('img')).toHaveStyle({
      transform: `rotate(${angleDeg}deg)`,
    });
  });
});
