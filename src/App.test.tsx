import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { numLatinLetters } from './services/CipherService';

const message = 'ABC';
const angleDeg = 360 / numLatinLetters;
const shift = 1;

async function rotateCipherDiskCounterClockwise(): Promise<void> {
  const user = userEvent.setup();
  render(<App />);
  await user.type(screen.getByLabelText('Geheime Nachricht'), message);
  await user.click(screen.getByLabelText('Gegen den Uhrzeigersinn'));
}

async function rotateCipherDiskClockwise(): Promise<void> {
  const user = userEvent.setup();
  render(<App />);
  await user.type(screen.getByLabelText('Geheime Nachricht'), message);
  await user.click(screen.getByLabelText('Im Uhrzeigersinn'));
}

async function resetCipherDisk(): Promise<void> {
  const user = userEvent.setup();
  render(<App />);
  await user.type(screen.getByLabelText('Geheime Nachricht'), message);
  await user.click(screen.getByLabelText('Im Uhrzeigersinn'));
  await user.click(screen.getByLabelText('Auf Anfang'));
}

async function rotateCipherDiskBack(): Promise<void> {
  const user = userEvent.setup();
  render(<App />);
  await user.type(screen.getByLabelText('Geheime Nachricht'), message);
  await user.click(screen.getByLabelText('Gegen den Uhrzeigersinn'));
  await user.click(screen.getByLabelText('Im Uhrzeigersinn'));
}

test('rotate cipher disk counter-clockwise: disk rotation', async () => {
  await rotateCipherDiskCounterClockwise();
  const element = screen.getByRole('img');
  const style = { transform: `rotate(-${angleDeg}deg)` };
  expect(element).toHaveStyle(style);
});

test('rotate cipher disk counter-clockwise: number of shifts', async () => {
  await rotateCipherDiskCounterClockwise();
  const element = screen.getByTestId('shift');
  const textContent = `Anzahl Verschiebungen: ${shift}`;
  expect(element).toHaveTextContent(textContent);
});

test('rotate cipher disk counter-clockwise: encrypted message', async () => {
  await rotateCipherDiskCounterClockwise();
  const element = screen.getByLabelText('Verschlüsselte Nachricht');
  const value = 'BCD';
  expect(element).toHaveValue(value);
});

test('rotate cipher disk clockwise: disk rotation', async () => {
  await rotateCipherDiskClockwise();
  const element = screen.getByRole('img');
  const style = { transform: `rotate(${angleDeg}deg)` };
  expect(element).toHaveStyle(style);
});

test('rotate cipher disk clockwise: number of shifts', async () => {
  await rotateCipherDiskClockwise();
  const element = screen.getByTestId('shift');
  const textContent = `Anzahl Verschiebungen: ${numLatinLetters - shift}`;
  expect(element).toHaveTextContent(textContent);
});

test('rotate cipher disk clockwise: encrypted message', async () => {
  await rotateCipherDiskClockwise();
  const element = screen.getByLabelText('Verschlüsselte Nachricht');
  const value = 'ZAB';
  expect(element).toHaveValue(value);
});

test('reset cipher disk: disk rotation', async () => {
  await resetCipherDisk();
  const element = screen.getByRole('img');
  const style = { transform: `rotate(0deg)` };
  expect(element).toHaveStyle(style);
});

test('reset cipher disk: number of shifts', async () => {
  await resetCipherDisk();
  const element = screen.getByTestId('shift');
  const textContent = 'Anzahl Verschiebungen: 0';
  expect(element).toHaveTextContent(textContent);
});

test('reset cipher disk: encrypted message', async () => {
  await resetCipherDisk();
  const element = screen.getByLabelText('Verschlüsselte Nachricht');
  const value = message;
  expect(element).toHaveValue(value);
});

test('rotate cipher disk back: disk rotation', async () => {
  await rotateCipherDiskBack();
  const element = screen.getByRole('img');
  const style = { transform: `rotate(0deg)` };
  expect(element).toHaveStyle(style);
});

test('rotate cipher disk back: number of shifts', async () => {
  await rotateCipherDiskBack();
  const element = screen.getByTestId('shift');
  const textContent = 'Anzahl Verschiebungen: 0';
  expect(element).toHaveTextContent(textContent);
});

test('rotate cipher disk back: encrypted message', async () => {
  await rotateCipherDiskBack();
  const element = screen.getByLabelText('Verschlüsselte Nachricht');
  const value = message;
  expect(element).toHaveValue(value);
});
