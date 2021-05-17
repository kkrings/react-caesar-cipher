import * as React from 'react';
import { Grid } from '@material-ui/core';
import { CipherDisks } from './cipher-disks/CipherDisks';
import { CipherControl } from './cipher-control/CipherControl';
import { numLatinLetters } from '../../services/CipherService';

type CipherProps = {
  onClockwiseRotation: () => void,
  onCounterClockwiseRotation: () => void
};

export function Cipher(props: CipherProps) {
  const deltaAngleDeg = 360 / numLatinLetters;

  const [angleDeg, setAngleDeg] = React.useState(0);

  const handleClockwiseRotation = () => {
    setAngleDeg((angleDeg + deltaAngleDeg) % 360);
    props.onClockwiseRotation();
  };

  const handleCounterClockwiseRotation = () => {
    setAngleDeg((angleDeg - deltaAngleDeg) % 360);
    props.onCounterClockwiseRotation();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CipherDisks angleDeg={angleDeg} />
      </Grid>
      <Grid item xs={12}>
        <CipherControl
          onClockwiseRotation={handleClockwiseRotation}
          onCounterClockwiseRotation={handleCounterClockwiseRotation}
        />
      </Grid>
    </Grid>
  );
}
