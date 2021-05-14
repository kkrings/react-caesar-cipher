import { Button, ButtonGroup } from '@material-ui/core';

type CipherControlProps = {
  onClockwise: () => void
  onCounterClockwise: () => void
}

export function CipherControl(props: CipherControlProps) {
  return (
    <ButtonGroup>
      <Button onClick={props.onClockwise}>
        Im Uhrzeigersinn
      </Button>
      <Button onClick={props.onCounterClockwise}>
        Gegen Uhrzeigersinn
      </Button>
    </ButtonGroup>
  );
}
