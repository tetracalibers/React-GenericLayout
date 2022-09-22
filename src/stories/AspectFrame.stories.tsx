import { ComponentStory } from '@storybook/react'
import { AspectFrame } from '../components/AspectFrame'
import { defaultProps } from '../components/AspectFrame/model'
import { desc_AspectFrameProps } from './args/AspectFrame'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import sampleImage from './assets/scenery.jpg'

export default {
  title: 'layout/AspectFrame',
  component: AspectFrame,
  parameters: {
    docs: {
      description: {
        component:
          'Suitable solution to crop the media to the specified aspect ratio'
      }
    }
  },
  argTypes: {
    ...desc_as,
    ...desc_ref,
    ...desc_children,
    ...desc_AspectFrameProps
  }
}

const ExampleContainer = styled.div`
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  height: 100%;
  width: 100%;
  box-sizing: padding-box;
`

const Template: ComponentStory<typeof AspectFrame> = ({
  children,
  ...args
}) => (
  <AspectFrame {...args} as={ExampleContainer}>
    <img src={sampleImage} />
  </AspectFrame>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
