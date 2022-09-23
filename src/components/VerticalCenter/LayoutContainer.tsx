import styled from 'styled-components'
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
    margin-top: var(--space);
    margin-bottom: var(--space);
  }

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }

  & > :nth-child(${(props) => props.central}) {
    margin-top: auto;
    margin-bottom: auto;
  }
`
