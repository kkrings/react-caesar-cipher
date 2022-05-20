import * as React from 'react';
import { AppBar, IconButton, Popper, Toolbar, Typography } from '@mui/material';
import { GitHub, Info } from '@mui/icons-material';
import { CipherAppBarInfoMenu } from './cipher-app-bar-info-menu/CipherAppBarInfoMenu';
import styles from './CipherAppBar.module.css';

export function CipherAppBar() {
  const [infoAnchor, setInfoAnchor] = React.useState<null | HTMLElement>(null);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="h1" className={styles.title}>
          Caesar-Verschlüsselung
        </Typography>
        <IconButton
          aria-label="Datenschutzerklärung, Lizenz"
          aria-controls="info-popup"
          aria-haspopup="true"
          color="inherit"
          onClick={(event) =>
            setInfoAnchor(infoAnchor === null ? event.currentTarget : null)
          }
          size="large"
        >
          <Info />
        </IconButton>
        <Popper
          id="info-popup"
          anchorEl={infoAnchor}
          open={infoAnchor !== null}
        >
          <CipherAppBarInfoMenu
            onCloseButtonClick={() => setInfoAnchor(null)}
          />
        </Popper>
        <IconButton
          color="inherit"
          href="https://github.com/kkrings/react-caesar-cipher"
          size="large"
        >
          <GitHub />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
