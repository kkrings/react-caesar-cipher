import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { CipherControl } from './CipherControl';

test('rotate clockwise', async () => {
  const user = userEvent.setup();
  const onClockwiseRotation = jest.fn();
  render(
    <CipherControl
      onClockwiseRotation={onClockwiseRotation}
      onCounterClockwiseRotation={() => {}}
      onReset={() => {}}
    />,
  );
  await user.click(screen.getByLabelText('Im Uhrzeigersinn'));
  expect(onClockwiseRotation).toBeCalledTimes(1);
});

test('rotate counter-clockwise', async () => {
  const user = userEvent.setup();
  const onCounterClockwiseRotation = jest.fn();
  render(
    <CipherControl
      onClockwiseRotation={() => {}}
      onCounterClockwiseRotation={onCounterClockwiseRotation}
      onReset={() => {}}
    />,
  );
  await user.click(screen.getByLabelText('Gegen den Uhrzeigersinn'));
  expect(onCounterClockwiseRotation).toBeCalledTimes(1);
});

test('reset', async () => {
  const user = userEvent.setup();
  const onReset = jest.fn();
  render(
    <CipherControl
      onClockwiseRotation={() => {}}
      onCounterClockwiseRotation={() => {}}
      onReset={onReset}
    />,
  );
  await user.click(screen.getByLabelText('Auf Anfang'));
  expect(onReset).toBeCalledTimes(1);
});
