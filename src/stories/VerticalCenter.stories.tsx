import { ComponentStory } from '@storybook/react'
import { VerticalCenter } from '../components/VerticalCenter'
import { defaultProps } from '../components/VerticalCenter/model'
import { desc_VerticalCenterProps } from './args/VerticalCenter'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React from 'react'

export default {
  title: 'layout/VerticalCenter',
  component: VerticalCenter,
  parameters: {
    docs: {
      description: {
        component:
          'Elements to be vertically centered within a specific area and the elements contained in that area'
      }
    }
  },
  argTypes: {
    ...desc_as,
    ...desc_ref,
    ...desc_children,
    ...desc_VerticalCenterProps
  }
}

const NeedScrollContainer = styled.div`
  height: 200vh;
  color: #4d608b;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`

const Item = styled.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  height: 100px;
  width: 100%;
`

const Template: ComponentStory<typeof VerticalCenter> = ({
  children,
  ...args
}) => (
  <VerticalCenter {...args} as={NeedScrollContainer}>
    <Item>one!!</Item>
    <Item>two!!</Item>
    <Item>three!!</Item>
    <Item>four!!</Item>
    <Item>five!!</Item>
  </VerticalCenter>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
