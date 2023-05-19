import { render, screen } from '@testing-library/react';
import { CipherDisks } from './CipherDisks';

test('rotate image', () => {
  const angleDeg = 45;
  render(<CipherDisks angleDeg={angleDeg} />);
  const transform = `rotate(${angleDeg}deg)`;
  expect(screen.getByRole('img')).toHaveStyle({ transform });
});
