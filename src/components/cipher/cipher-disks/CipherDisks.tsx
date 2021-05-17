import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import cipherInnerDisk from './CipherInnerDisk.png';

type CipherDisksProps = {
  angleDeg: number
}

const useStyles = makeStyles(() => createStyles({
  rotated: {
    transform: (props: CipherDisksProps) => `rotate(${props.angleDeg}deg)`
  }
}));

export function CipherDisks(props : CipherDisksProps) {
  const rotationStyle = useStyles(props);

  return (
    <img
      src={cipherInnerDisk}
      alt="Chiffrierscheibe"
      width="100%"
      height="auto"
      className={rotationStyle.rotated}
    />
  );
}
