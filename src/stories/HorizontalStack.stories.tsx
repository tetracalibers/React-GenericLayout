import { ComponentStory } from '@storybook/react'
import { HorizontalStack } from '../components/HorizontalStack'
import { defaultProps } from '../components/HorizontalStack/model'
import { desc_HorizontalStackProps } from './args/HorizontalStack'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React from 'react'

export default {
  title: 'layout/HorizontalStack',
  component: HorizontalStack,
  parameters: {
    docs: {
      description: {
        component:
          'Horizontal alignment layout that wraps nicely on small screens'
      }
    }
  },
  argTypes: {
    ...desc_as,
    ...desc_ref,
    ...desc_children,
    ...desc_HorizontalStackProps
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

const Template: ComponentStory<typeof HorizontalStack> = ({
  children,
  ...args
}) => (
  <HorizontalStack {...args} as={FitHeightContainer}>
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
  </HorizontalStack>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
