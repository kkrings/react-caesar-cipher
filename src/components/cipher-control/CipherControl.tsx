import * as React from 'react';
import { Box, IconButton } from '@material-ui/core';
import { Autorenew, RotateLeft, RotateRight } from '@material-ui/icons';

type CipherControlProps = {
  onClockwiseRotation: () => void
  onCounterClockwiseRotation: () => void
  onReset: () => void
};

export function CipherControl(props: CipherControlProps) {
  return (
    <Box textAlign="center">
      <IconButton
        onClick={props.onClockwiseRotation}
        aria-label="Im Uhrzeigersinn"
      >
        <RotateRight />
      </IconButton>
      <IconButton
        onClick={props.onCounterClockwiseRotation}
        aria-label="Gegen den Uhrzeigersinn"
      >
        <RotateLeft />
      </IconButton>
      <IconButton
        onClick={props.onReset}
        aria-label="Auf Anfang"
        color="secondary"
      >
        <Autorenew />
      </IconButton>
    </Box>
  );
}
