import * as React from 'react';
import { Box, TextField } from '@material-ui/core';
import { CipherDirection } from '../../types/CipherDirection';
import { CipherService } from '../../services/CipherService';
import styles from './CipherMessageInput.module.css';

type CipherMessageInputProps = {
  shift: number,
  direction: CipherDirection
};

export function CipherMessageInput(props: CipherMessageInputProps) {
  const [message, setMessage] = React.useState('');

  const encrypt = props.direction === CipherDirection.encrypt;

  const cipherService = new CipherService(
     encrypt ? props.shift : -props.shift
  );

  return (
    <Box padding="1rem 0">
      <Box margin="1rem 0">
        <TextField
          id="message"
          className={styles.cipherMessageInput}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          label="Geheime Nachricht"
          placeholder="Hier kannst du deine geheime Nachricht eingeben."
          variant="outlined"
          rows={5}
          multiline
        />
      </Box>
      <Box margin="1rem 0">
        <TextField
          id="transformed-message"
          className={styles.cipherMessageInput}
          value={cipherService.transformMessage(message)}
          variant="outlined"
          label={
            encrypt ? 'Verschlüsselte Nachricht' : 'Entschlüsselte Nachricht'
          }
          rows={5}
          multiline
          disabled
        />
      </Box>
    </Box>
  );
}
