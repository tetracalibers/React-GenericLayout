import { ComponentStory } from '@storybook/react'
import { VerticalStack } from '../components/VerticalStack'
import { defaultProps } from '../components/VerticalStack/model'
import { desc_VerticalStackProps } from './args/VerticalStack'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React from 'react'

export default {
  title: 'layout/VerticalStack',
  component: VerticalStack,
  parameters: {
    docs: {
      description: {
        component: 'Layout with elements evenly spaced vertically'
      }
    }
  },
  argTypes: {
    ...desc_as,
    ...desc_ref,
    ...desc_children,
    ...desc_VerticalStackProps
  }
}

const NeedScrollContainer = styled.div`
  height: 200vh;
  color: #4d608b;
`

const StackItem = styled.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  margin: 0 2em;
  min-height: 100px;
  height: auto;
`

const Template: ComponentStory<typeof VerticalStack> = ({
  children,
  ...args
}) => (
  <VerticalStack {...args} as={NeedScrollContainer}>
    <StackItem>Top!!</StackItem>
    <StackItem>Middle!!</StackItem>
    <StackItem>Bottom!!</StackItem>
    <StackItem>
      <StackItem>Inner Top!!</StackItem>
      <StackItem>Inner Middle!!</StackItem>
      <StackItem>Inner Bottom!!</StackItem>
    </StackItem>
  </VerticalStack>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
