import styled, { css } from 'styled-components'
import { CharacterProps } from './model'

export const LayoutContainer = styled.div<CharacterProps>`
  --space: ${({ spaceV, spaceU }) => `${spaceV}${spaceU}`};
  --padding: ${({ paddingV, paddingU }) => `${paddingV}${paddingU}`};
  --min-height: ${({ minHeightV, minHeightU }) => `${minHeightV}${minHeightU}`};

  && {
    display: flex;
    flex-direction: column;
    min-height: var(--min-height);
    padding: var(--padding);
    box-sizing: border-box;
  }

  & > * {
    /* 各子要素に上下のmarginを設定 */
    margin-top: calc(var(--space) * 0.5);
    margin-bottom: calc(var(--space) * 0.5);
  }

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }

  ${(props) => css`
    & > :nth-child(${props.central}) {
      margin-top: auto;
      margin-bottom: auto;
    }
  `}
`
