import * as React from 'react';
import { Box, IconButton } from '@material-ui/core';
import { Autorenew, RotateLeft, RotateRight } from '@material-ui/icons';

type CipherControlProps = {
  onClockwiseRotation: () => void
  onCounterClockwiseRotation: () => void
  onReset: () => void
}

export function CipherControl(props: CipherControlProps) {
  return (
    <Box textAlign="center">
      <IconButton onClick={props.onClockwiseRotation}>
        <RotateRight />
      </IconButton>
      <IconButton onClick={props.onCounterClockwiseRotation}>
        <RotateLeft />
      </IconButton>
      <IconButton onClick={props.onReset} color="secondary">
        <Autorenew />
      </IconButton>
    </Box>
  );
}
