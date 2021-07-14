import * as React from 'react';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import cipherInnerDisk from './CipherInnerDisk.png';
import styles from './CipherDisks.module.css';

type CipherDisksProps = {
  angleDeg: number
};

const useStyles = makeStyles(() => createStyles({
  rotated: {
    transform: (props: CipherDisksProps) => `rotate(${props.angleDeg}deg)`
  }
}));

export function CipherDisks(props : CipherDisksProps) {
  const rotationStyle = useStyles(props);

  return (
    <Box className={styles.cipherOuterDisk}>
      <img
        id="cipher-disk"
        src={cipherInnerDisk}
        alt="Chiffrierscheibe"
        width="100%"
        height="auto"
        className={rotationStyle.rotated}
      />
    </Box>
  );
}
