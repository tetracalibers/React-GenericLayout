import { ComponentStory } from '@storybook/react'
import { TwoColumn } from '../components/TwoColumn'
import { defaultProps } from '../components/TwoColumn/model'
import { desc_TwoColumnProps } from './args/TwoColumn'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React, { memo } from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

export default {
  title: 'layout/TwoColumn',
  component: TwoColumn,
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
    ...desc_TwoColumnProps
  }
}

const NeedScrollContainer = styled.div`
  height: 200vh;
  color: #4d608b;
`

const Column1 = styled.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
`

const Column2 = styled.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #ffa6a666;
`

const Column1Content = memo(() => <LoremIpsum />)
const Column2Content = memo(() => <LoremIpsum p={3} />)

const Template: ComponentStory<typeof TwoColumn> = ({ children, ...args }) => (
  <TwoColumn {...args} as={NeedScrollContainer}>
    <Column1>
      <Column1Content />
    </Column1>
    <Column2>
      <Column2Content />
    </Column2>
  </TwoColumn>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
