import * as React from 'react';
import { Tab, Tabs } from '@mui/material';
import { Lock, LockOpen } from '@mui/icons-material';
import { CipherMessageInput } from './cipher-message-input/CipherMessageInput';
import { CipherDirection } from '../../types/CipherDirection';

type CipherMessageProps = {
  shift: number
};

export function CipherMessage(props: CipherMessageProps) {
  const [cipherDirection, setCipherDirection] = React.useState(
    CipherDirection.encrypt
  );

  return (
    <>
      <Tabs
        aria-label="Geheime Nachricht verschlüsseln/entschlüsseln"
        value={cipherDirection}
        onChange={(_, direction) => setCipherDirection(direction)}
        variant="fullWidth"
        indicatorColor="primary"
      >
        <Tab
          id="encrypt-tab"
          aria-controls="encrypt-tabpanel"
          icon={<Lock />}
          label="Verschlüsseln"
          value={CipherDirection.encrypt}
        />
        <Tab
          id="decrypt-tab"
          aria-controls="decrypt-tabpanel"
          icon={<LockOpen />}
          label="Entschlüsseln"
          value={CipherDirection.decrypt}
        />
      </Tabs>
      <CipherMessageInput
        shift={props.shift}
        direction={cipherDirection}
      />
      <div data-testid="shift">
        <strong>Anzahl Verschiebungen:</strong> {props.shift}
      </div>
    </>
  );
}
