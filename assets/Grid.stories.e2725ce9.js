import{r as p,j as e,b as v}from"./jsx-runtime.83dd56e8.js";import{s as u,o as f,l as d,K as t,r as s,d as h,a as y,b as g}from"./ref.f9d68167.js";import"./iframe.4683076c.js";const o=u.div`
  --gap: ${({spaceV:a,spaceU:l})=>`${a}${l}`};
  --min: ${({columnMinWidthV:a,columnMinWidthU:l})=>`${a}${l}`};

  && {
    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(min(var(--min), 100%), 1fr));
  }
`;try{o.displayName="LayoutContainer",o.__docgenInfo={description:"",displayName:"LayoutContainer",props:{columnMinWidthV:{defaultValue:null,description:"",name:"columnMinWidthV",required:!1,type:{name:"number"}},columnMinWidthU:{defaultValue:null,description:"",name:"columnMinWidthU",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"em"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"em"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Grid/LayoutContainer.tsx#LayoutContainer"]={docgenInfo:o.__docgenInfo,name:"LayoutContainer",path:"src/components/Grid/LayoutContainer.tsx#LayoutContainer"})}catch{}const G={columnMinWidthV:d(250),columnMinWidthU:d("px"),spaceV:d(1),spaceU:d("rem")},r=f(G),_=({ref:a,as:l,children:m,...c}={...r})=>e(o,{...c,ref:a,as:l||"div",children:m}),i=p.exports.forwardRef(_);try{i.displayName="Grid",i.__docgenInfo={description:"",displayName:"Grid",props:{columnMinWidthV:{defaultValue:null,description:"",name:"columnMinWidthV",required:!1,type:{name:"number"}},columnMinWidthU:{defaultValue:null,description:"",name:"columnMinWidthU",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"em"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"em"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Grid/index.tsx#Grid"]={docgenInfo:i.__docgenInfo,name:"Grid",path:"src/components/Grid/index.tsx#Grid"})}catch{}const x={columnMinWidthV:{...t.minHeight,control:{type:"number"},description:"Numeric value representing the minimum width of the grit cell",table:{...t.minHeight.table,defaultValue:{summary:r.columnMinWidthV,details:null}}},columnMinWidthU:{...t.minHeight,control:{type:"select"},options:s.Unit.length,description:"Units of columnMinWidthV",table:{...t.minHeight.table,defaultValue:{summary:r.columnMinWidthU,details:null}}},spaceV:{...t.gap,control:{type:"number"},description:"Numeric value representing the size of the grit cell gap",table:{...t.gap.table,defaultValue:{summary:r.spaceV,details:null}}},spaceU:{...t.gap,control:{type:"select"},options:s.Unit.length,description:"Units of spaceV",table:{...t.gap.table,defaultValue:{summary:r.spaceU,details:null}}}},M={title:"layout/Grid",component:i,parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react'
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
        component: 'Elements to be placed in a grid'
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

const FitHeightContainer = styled.div\`
  height: 100%;
  color: #4d608b;
\`

const GridItem = styled.div\`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  height: 100px;
  width: 150px;
\`

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
`,locationsMap:{playground:{startLoc:{col:46,line:41},endLoc:{col:1,line:54},startBody:{col:46,line:41},endBody:{col:1,line:54}}}},docs:{description:{component:"Elements to be placed in a grid"}}},argTypes:{...h,...y,...g,...x}},b=u.div`
  height: 100%;
  color: #4d608b;
`,n=u.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  height: 100px;
  width: 150px;
`,V=({children:a,...l})=>v(i,{...l,as:b,children:[e(n,{children:"one!!"}),e(n,{children:"two!!"}),e(n,{children:"three!!"}),e(n,{children:"four!!"}),e(n,{children:"five!!"}),e(n,{children:"six!!"}),e(n,{children:"seven!!"}),e(n,{children:"eight!!"}),e(n,{children:"nine!!"}),e(n,{children:"ten!!"})]}),I=V.bind({});I.args={...r};const U=["playground"];export{U as __namedExportsOrder,M as default,I as playground};
//# sourceMappingURL=Grid.stories.e2725ce9.js.map
