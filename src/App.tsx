import * as React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Cipher } from './components/cipher/Cipher';
import { Encryption } from './components/encryption/Encryption';
import { numLatinLetters } from './services/CipherService';

export function App() {
  const [shift, setShift] = React.useState(19);

  const handleClockwiseRotation = () => {
    const newShift = (shift - 1) % numLatinLetters;
    setShift(newShift >= 0 ? newShift : numLatinLetters + newShift);
  }

  const handleCounterClockwiseRotation = () => {
    setShift((shift + 1) % numLatinLetters);
  }

  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Caesar-Verschlüsselung</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Cipher
            onClockwiseRotation={handleClockwiseRotation}
            onCounterClockwiseRotation={handleCounterClockwiseRotation}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Encryption shift={shift} />
        </Grid>
      </Grid>
    </Container>
  );
}
