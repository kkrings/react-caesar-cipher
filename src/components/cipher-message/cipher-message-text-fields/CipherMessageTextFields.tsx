import * as React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { CipherService } from '../../../services/CipherService';

type CipherMessageTextFieldsProps = {
  shift: number
};

export function CipherMessageTextFields(props: CipherMessageTextFieldsProps) {
  const [message, setMessage] = React.useState('');

  const cipherService = new CipherService(props.shift);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          variant="outlined"
          multiline
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={cipherService.transformMessage(message)}
          variant="outlined"
          multiline
          disabled
        />
      </Grid>
    </Grid>
  );
}
