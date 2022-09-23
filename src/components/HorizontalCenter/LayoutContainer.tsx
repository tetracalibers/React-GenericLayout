import styled, { css } from 'styled-components'
import { CharacterProps } from './model'

export const LayoutContainer = styled.div<CharacterProps>`
  --paddingX: ${(props) => props.paddingXV! + props.paddingXU!};
  --max-width: ${(props) => props.maxWidthV! + props.maxWidthU!};

  && {
    ${({ byContentWidth }) => {
      return (
        byContentWidth &&
        css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `
      )
    }}

    ${({ textCenter }) => {
      return (
        textCenter &&
        css`
          text-align: center;
        `
      )
    }}
    
    box-sizing: border-box;
    padding-left: var(--paddingX);
    padding-right: var(--paddingX);
  }

  && > * {
    /* paddingを幅の計算から除外 */
    box-sizing: content-box;
    max-width: var(--max-width);
    margin-left: auto;
    margin-right: auto;
  }
`
