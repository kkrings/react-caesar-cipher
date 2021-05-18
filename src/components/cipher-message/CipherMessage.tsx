import * as React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { Lock, LockOpen } from '@material-ui/icons';
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
        value={cipherDirection}
        onChange={(_, direction) => setCipherDirection(direction)}
        indicatorColor="primary"
      >
        <Tab
          icon={<Lock />}
          label="Verschlüsseln"
          value={CipherDirection.encrypt}
        />
        <Tab
          icon={<LockOpen />}
          label="Entschlüsseln"
          value={CipherDirection.decrypt}
        />
      </Tabs>
    </>
  );
}
