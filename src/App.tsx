import * as React from 'react';
import { useState } from 'react';
import { Container, Grid } from '@material-ui/core';

import { Cipher } from './components/cipher/Cipher';
import { CipherControl } from './components/cipher-control/CipherControl';

export function App() {
  const [angle, setAngle ] = useState(0);

  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={12}>
          <h1>Caesar-Verschlüsselung</h1>
        </Grid>
        <Grid item xs={12}>
          <Cipher angle={angle} />
        </Grid>
        <Grid item xs={12}>
          <CipherControl
            onClockwise={() => setAngle((angle + 20) % 360)}
            onCounterClockwise={() => setAngle((angle - 20) % 360)}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
