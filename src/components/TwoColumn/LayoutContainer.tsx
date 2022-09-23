import styled, { css } from 'styled-components'
import { CharacterProps } from './model'

const css_Variables = css<CharacterProps>`
  --sub-max-width: ${(props) => props.subMaxWidthV! + props.subMaxWidthU!};
  --main-min-width: ${(props) => props.mainMinWidthPer! + '%'};
  --gap: ${(props) => props.spaceV! + props.spaceU!};
`

const css_SubColumn = css`
  flex-basis: var(--sub-max-width);
  flex-grow: 1;
`

const css_MainColumn = css`
  flex-basis: 0;
  flex-grow: 999;
  min-width: var(--main-min-width);
`

export const LayoutContainer = styled.div<CharacterProps>`
  ${css_Variables}

  && {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
  }

  ${(props) =>
    props.noStretchHeight &&
    css`
      && {
        align-items: flex-start;
      }
    `}

  ${(props) =>
    props.subColumn === 'last'
      ? css`
          & > :first-child {
            ${css_MainColumn}
          }
          & > :last-child {
            ${css_SubColumn}
          }
        `
      : css`
          & > :first-child {
            ${css_SubColumn}
          }
          & > :last-child {
            ${css_MainColumn}
          }
        `}
`
