import * as React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import styles from './CipherAppBar.module.css';

export function CipherAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="h1" className={styles.title}>
          Caesar-Verschlüsselung
        </Typography>
        <IconButton
          color="inherit"
          href="https://github.com/kkrings/react-caesar-cipher"
        >
          <GitHub />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
