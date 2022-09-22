import styled from 'styled-components'
import { CharacterProps } from './model'

export const LayoutContainer = styled.div<CharacterProps>`
  --space: ${({ spaceV, spaceU }) => `${spaceV}${spaceU}`};
  --justify: ${(props) => props.justify};
  --align: ${(props) => props.align};

  && {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space);
    justify-content: var(--justify);
    align-items: var(--align);
  }
`
