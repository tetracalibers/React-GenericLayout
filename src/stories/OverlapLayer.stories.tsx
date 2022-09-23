import { ComponentStory } from '@storybook/react'
import { OverlapLayer } from '../components/OverlapLayer'
import { defaultUpperProps } from '../components/OverlapLayer/model/upper'
import { desc_OverlapLayerProps } from './args/OverlapLayer'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

export default {
  title: 'layout/OverlapLayer',
  component: OverlapLayer,
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
    ...desc_OverlapLayerProps
  }
}

const SampleBackContent = styled.div`
  color: #4d608b;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`

const SamplePanel = styled.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe;
  color: #4d608b;
`

const OverflowVer: ComponentStory<typeof OverlapLayer.Upper> = ({
  children,
  ...args
}) => (
  <OverlapLayer.Origin>
    <OverlapLayer.Upper {...args} as={SamplePanel}>
      <LoremIpsum />
    </OverlapLayer.Upper>
    <SampleBackContent>
      <LoremIpsum />
    </SampleBackContent>
  </OverlapLayer.Origin>
)

export const overflowSample = OverflowVer.bind({})
overflowSample.args = {
  ...defaultUpperProps
}

const ScrollTrackingVer: ComponentStory<typeof OverlapLayer.Upper> = ({
  children,
  ...args
}) => (
  <OverlapLayer.Origin>
    <OverlapLayer.Upper {...args} as={SamplePanel}>
      <LoremIpsum />
    </OverlapLayer.Upper>
    <SampleBackContent>
      <LoremIpsum p={10} />
    </SampleBackContent>
  </OverlapLayer.Origin>
)

export const scrollTrackingSample = ScrollTrackingVer.bind({})
scrollTrackingSample.args = {
  ...defaultUpperProps
}
