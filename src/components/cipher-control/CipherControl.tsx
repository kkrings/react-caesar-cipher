import { Box, IconButton } from '@mui/material';
import { Autorenew, RotateLeft, RotateRight } from '@mui/icons-material';

type CipherControlProps = {
  onClockwiseRotation: () => void;
  onCounterClockwiseRotation: () => void;
  onReset: () => void;
};

export function CipherControl(props: CipherControlProps) {
  return (
    <Box textAlign="center">
      <IconButton
        onClick={props.onClockwiseRotation}
        aria-label="Im Uhrzeigersinn"
        aria-controls="cipher-disk"
        size="large"
      >
        <RotateRight />
      </IconButton>
      <IconButton
        onClick={props.onCounterClockwiseRotation}
        aria-label="Gegen den Uhrzeigersinn"
        aria-controls="cipher-disk"
        size="large"
      >
        <RotateLeft />
      </IconButton>
      <IconButton
        onClick={props.onReset}
        aria-label="Auf Anfang"
        aria-controls="cipher-disk"
        color="secondary"
        size="large"
      >
        <Autorenew />
      </IconButton>
    </Box>
  );
}
