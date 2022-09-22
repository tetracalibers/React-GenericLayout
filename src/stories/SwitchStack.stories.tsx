import { ComponentStory } from '@storybook/react'
import { SwitchStack } from '../components/SwitchStack'
import { defaultProps } from '../components/SwitchStack/model'
import { desc_SwitchStackProps } from './args/SwitchStack'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React from 'react'

export default {
  title: 'layout/SwitchStack',
  component: SwitchStack,
  parameters: {
    docs: {
      description: {
        component:
          'Suitable solution to achieve a responsive layout with a sidebar on one side'
      }
    }
  },
  argTypes: {
    ...desc_as,
    ...desc_ref,
    ...desc_children,
    ...desc_SwitchStackProps
  }
}

const FitHeightContainer = styled.div`
  height: 100%;
  color: #4d608b;
`

const StackItem = styled.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  height: 100px;
  width: 150px;
`

const Template: ComponentStory<typeof SwitchStack> = ({
  children,
  ...args
}) => (
  <SwitchStack {...args} as={FitHeightContainer}>
    <StackItem>one!!</StackItem>
    <StackItem>two!!</StackItem>
    <StackItem>three!!</StackItem>
    <StackItem>four!!</StackItem>
    <StackItem>five!!</StackItem>
    <StackItem>six!!</StackItem>
    <StackItem>seven!!</StackItem>
    <StackItem>eight!!</StackItem>
    <StackItem>nine!!</StackItem>
    <StackItem>ten!!</StackItem>
  </SwitchStack>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
