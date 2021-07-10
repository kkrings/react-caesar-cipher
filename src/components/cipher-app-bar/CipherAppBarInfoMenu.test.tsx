import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CipherAppBarInfoMenu } from './CipherAppBarInfoMenu';

describe('CipherAppBarInfoMenu', () => {
  const handleOnCloseButtonClick = jest.fn();

  beforeEach(() => {
    render(<CipherAppBarInfoMenu onCloseButtonClick={handleOnCloseButtonClick} />);
  });

  beforeEach(() => {
    userEvent.click(screen.getByRole('close'));
  });

  it('handleOnCloseButtonClick should have been called', () => {
    expect(handleOnCloseButtonClick).toHaveBeenCalledTimes(1);
  });
});
