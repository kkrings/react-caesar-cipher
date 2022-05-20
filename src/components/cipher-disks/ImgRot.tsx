import { styled } from '@mui/material/styles';

type ImgRotProps = {
  angle: number;
};

export const ImgRot = styled('img')<ImgRotProps>(({ angle: angleDeg }) => ({
  transform: `rotate(${angleDeg}deg)`,
}));
