import { ComponentStory } from '@storybook/react'
import { SliderAlign } from '../components/SliderAlign'
import { defaultProps } from '../components/SliderAlign/model'
import { desc_SliderAlignProps } from './args/SliderAlign'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React from 'react'

export default {
  title: 'layout/SliderAlign',
  component: SliderAlign,
  parameters: {
    docs: {
      description: {
        component: 'Elements you want to put side by side in a slider format'
      }
    }
  },
  argTypes: {
    ...desc_as,
    ...desc_ref,
    ...desc_children,
    ...desc_SliderAlignProps
  }
}

const FitHeightContainer = styled.div`
  height: 100%;
  color: #4d608b;
  background-color: #4d608b;
`

const Item = styled.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe;
  height: 100px;
  width: 150px;
`

const Template: ComponentStory<typeof SliderAlign> = ({
  children,
  ...args
}) => (
  <SliderAlign {...args} as={FitHeightContainer}>
    <Item>one!!</Item>
    <Item>two!!</Item>
    <Item>three!!</Item>
    <Item>four!!</Item>
    <Item>five!!</Item>
    <Item>six!!</Item>
    <Item>seven!!</Item>
    <Item>eight!!</Item>
    <Item>nine!!</Item>
    <Item>ten!!</Item>
  </SliderAlign>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
