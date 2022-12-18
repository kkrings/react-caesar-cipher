import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CipherAppBarInfoMenu } from './CipherAppBarInfoMenu';

test('handleOnCloseButtonClick should have been called', async () => {
  const user = userEvent.setup();
  const handleOnCloseButtonClick = jest.fn();
  render(
    <CipherAppBarInfoMenu onCloseButtonClick={handleOnCloseButtonClick} />,
  );
  await user.click(screen.getByRole('close'));
  expect(handleOnCloseButtonClick).toHaveBeenCalledTimes(1);
});
