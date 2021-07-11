import * as React from 'react';
import { Box, IconButton, Paper, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import styles from './CipherAppBarInfoMenu.module.css';

type CipherAppBarInfoMenuProps = {
  onCloseButtonClick: () => void
};

export function CipherAppBarInfoMenu(props: CipherAppBarInfoMenuProps) {
  return (
    <Paper className={styles.infoMenu}>
      <Box textAlign="right">
        <IconButton role="close" onClick={props.onCloseButtonClick}>
          <Close />
        </IconButton>
      </Box>
      <Typography variant="h6">Datenschutzerklärung</Typography>
      <Typography variant="body2" paragraph={true}>
        Diese Applikation speichert keinerlei persönliche Daten. Es werden weder Cookies
        noch Tools wie Google Analytics verwendet.
      </Typography>
    </Paper>
  );
}
