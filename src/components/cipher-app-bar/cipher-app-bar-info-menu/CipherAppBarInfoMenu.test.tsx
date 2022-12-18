import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CipherAppBarInfoMenu } from './CipherAppBarInfoMenu';

test('click close button', async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();
  render(<CipherAppBarInfoMenu onCloseButtonClick={handleClick} />);
  await user.click(screen.getByRole('close'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
