import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CipherDisks } from './CipherDisks';

test('style contains transform property', () => {
  const angleDeg = 45;
  render(<CipherDisks angleDeg={angleDeg} />);
  expect(screen.getByRole('img')).toHaveStyle({transform: `rotate(${angleDeg}deg)`});
});
