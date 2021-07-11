import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CipherAppBar } from './CipherAppBar';

describe('CipherAppBar', () => {
  beforeEach(() => {
    render(<CipherAppBar />);
  });

  it('info popup should be closed', () => {
    expect(screen.queryByRole('tooltip')).toBeNull()
  });

  describe('click on info button', () => {
    beforeEach(() => {
      userEvent.click(screen.getByLabelText('Datenschutzerklärung'));
    });

    it('info popup should have been opened', () => {
      expect(screen.queryByRole('tooltip')).toBeInTheDocument()
    });
  });

  describe('click on info button when info popup is open', () => {
    beforeEach(() => {
      const button = screen.getByLabelText('Datenschutzerklärung')
      userEvent.click(button);
      userEvent.click(button);
    });

    it('info popup should have been closed', () => {
      expect(screen.queryByRole('tooltip')).toBeNull()
    });
  });

  describe('click on close button', () => {
    beforeEach(() => {
      userEvent.click(screen.getByLabelText('Datenschutzerklärung'));
    });

    beforeEach(() => {
      userEvent.click(screen.getByRole('close'));
    });

    it('info popup should have been closed', () => {
      expect(screen.queryByRole('tooltip')).toBeNull()
    });
  });
});
