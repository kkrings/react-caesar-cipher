import * as React from 'react';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import styles from './CipherAppBarInfoMenu.module.css';

type CipherAppBarInfoMenuProps = {
  onCloseButtonClick: () => void;
};

export function CipherAppBarInfoMenu(props: CipherAppBarInfoMenuProps) {
  return (
    <Paper className={styles.infoMenu}>
      <Box textAlign="right">
        <IconButton
          role="close"
          onClick={props.onCloseButtonClick}
          size="large"
        >
          <Close />
        </IconButton>
      </Box>
      <Typography variant="h6">Datenschutzerklärung</Typography>
      <Typography variant="body2" paragraph={true}>
        Diese Applikation speichert keinerlei persönliche Daten. Es werden weder
        Cookies noch Tools wie Google Analytics verwendet.
      </Typography>
      <Typography variant="h6">Lizenz</Typography>
      <Typography variant="body2" paragraph={true}>
        Soweit gesetzlich möglich, hat Kai Krings auf alle Urheber- und
        verwandte Schutzrechte für diese Applikation verzichtet.
      </Typography>
      <a
        rel="license"
        href="http://creativecommons.org/publicdomain/zero/1.0/deed.de"
      >
        <img
          src="http://i.creativecommons.org/p/zero/1.0/88x31.png"
          style={{ borderStyle: 'none' }}
          alt="CC0"
        />
      </a>
    </Paper>
  );
}
