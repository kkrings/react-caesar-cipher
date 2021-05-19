import * as React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Autorenew, RotateLeft, RotateRight } from '@material-ui/icons';

type CipherControlProps = {
  onClockwiseRotation: () => void
  onCounterClockwiseRotation: () => void
  onReset: () => void
}

export function CipherControl(props: CipherControlProps) {
  return (
    <Grid container spacing={1} justify="center">
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          startIcon={<RotateRight />}
          onClick={props.onClockwiseRotation}
        >
          Im Uhrzeigersinn
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          startIcon={<RotateLeft />}
          onClick={props.onCounterClockwiseRotation}
        >
          Gegen den Uhrzeigersinn
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Autorenew />}
          onClick={props.onReset}
        >
          Auf Anfang
        </Button>
      </Grid>
    </Grid>
  );
}
