import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import cipherInner from './CipherInner.png';

type CipherProps = {
  angle: number
}

const useStyles = makeStyles(() => createStyles({
  rotated: {
    transform: (props: CipherProps) => `rotate(${props.angle}deg)`
  }
}));

export function Cipher(props : CipherProps) {
  const rotationStyle = useStyles(props);

  return (
    <img
      src={cipherInner}
      alt="Chiffrierscheibe"
      width="200"
      height="200"
      className={rotationStyle.rotated}
    />
  );
}
