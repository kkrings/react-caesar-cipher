import * as React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { CipherControl } from './components/cipher-control/CipherControl';
import { CipherDisks } from './components/cipher-disks/CipherDisks';
import { CipherMessage } from './components/cipher-message/CipherMessage';
import { numLatinLetters } from './services/CipherService';
import styles from './App.module.css';

export function App() {
  const deltaAngleDeg = 360 / numLatinLetters;

  const [shift, setShift] = React.useState(0);
  const [angleDeg, setAngleDeg] = React.useState(0);

  const handleClockwiseRotation = () => {
    const newShift = (shift - 1) % numLatinLetters;
    setShift(newShift >= 0 ? newShift : numLatinLetters + newShift);
    setAngleDeg((angleDeg + deltaAngleDeg) % 360);
  }

  const handleCounterClockwiseRotation = () => {
    setShift((shift + 1) % numLatinLetters);
    setAngleDeg((angleDeg - deltaAngleDeg) % 360);
  }

  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Caesar-Verschlüsselung</h1>
        </Grid>
        <Grid item xs={12}>
        <CipherControl
          onClockwiseRotation={handleClockwiseRotation}
          onCounterClockwiseRotation={handleCounterClockwiseRotation}
        />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={styles.leftColumn}>
            <CipherDisks angleDeg={angleDeg} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={styles.rightColumn}>
            <CipherMessage shift={shift} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
