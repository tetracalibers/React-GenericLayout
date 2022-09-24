import { ComponentStory } from '@storybook/react'
import { Grid } from '../components/Grid'
import { defaultProps } from '../components/Grid/model'
import { desc_GridProps } from './args/Grid'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React from 'react'

export default {
  title: 'layout/Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: 'Responsive grid layout without explicit media queries'
      }
    }
  },
  argTypes: {
    ...desc_as,
    ...desc_ref,
    ...desc_children,
    ...desc_GridProps
  }
}

const FitHeightContainer = styled.div`
  height: 100%;
  color: #4d608b;
`

const GridItem = styled.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  height: 100px;
  width: 150px;
`

const Template: ComponentStory<typeof Grid> = ({ children, ...args }) => (
  <Grid {...args} as={FitHeightContainer}>
    <GridItem>one!!</GridItem>
    <GridItem>two!!</GridItem>
    <GridItem>three!!</GridItem>
    <GridItem>four!!</GridItem>
    <GridItem>five!!</GridItem>
    <GridItem>six!!</GridItem>
    <GridItem>seven!!</GridItem>
    <GridItem>eight!!</GridItem>
    <GridItem>nine!!</GridItem>
    <GridItem>ten!!</GridItem>
  </Grid>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
