import { Box } from '@mui/material';
import { ImgRot } from './ImgRot';
import cipherInnerDisk from './CipherInnerDisk.png';
import styles from './CipherDisks.module.css';

type CipherDisksProps = {
  angleDeg: number;
};

export function CipherDisks(props: CipherDisksProps) {
  return (
    <Box className={styles.cipherOuterDisk}>
      <ImgRot
        id="cipher-disk"
        src={cipherInnerDisk}
        alt="Chiffrierscheibe"
        width="100%"
        height="auto"
        angle={props.angleDeg}
      />
    </Box>
  );
}
