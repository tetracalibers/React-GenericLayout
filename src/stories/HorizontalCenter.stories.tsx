import { ComponentStory } from '@storybook/react'
import { HorizontalCenter } from '../components/HorizontalCenter'
import { defaultProps } from '../components/HorizontalCenter/model'
import { desc_HorizontalCenterProps } from './args/HorizontalCenter'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React from 'react'

export default {
  title: 'layout/HorizontalCenter',
  component: HorizontalCenter,
  parameters: {
    docs: {
      description: {
        component: 'Suitable solution for centering elements horizontally'
      }
    }
  },
  argTypes: {
    ...desc_as,
    ...desc_ref,
    ...desc_children,
    ...desc_HorizontalCenterProps
  }
}

const FullWidthContainer = styled.div`
  width: 100%;
  color: #4d608b;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`

const Item = styled.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  height: 100px;
`

const Template: ComponentStory<typeof HorizontalCenter> = ({
  children,
  ...args
}) => (
  <HorizontalCenter {...args} as={FullWidthContainer}>
    <Item>Centering!!</Item>
  </HorizontalCenter>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
