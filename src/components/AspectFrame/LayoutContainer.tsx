import { CharacterProps } from './model'
import styled from 'styled-components'

export const LayoutContainer = styled.div<CharacterProps>`
  --height: ${({ ratioY }) => ratioY};
  --width: ${({ ratioX }) => ratioX};

  && {
    padding-bottom: calc(var(--height) / var(--width) * 100%);
    position: relative;
  }

  & > * {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > img,
  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
