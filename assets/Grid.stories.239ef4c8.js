import{r as p,j as e,b as v}from"./jsx-runtime.63741f93.js";import{s as u,o as h,l as o,K as t,r as s,d as f,a as y,b as g}from"./ref.b9624bbb.js";import"./iframe.b0087190.js";const d=u.div`
  --gap: ${({spaceV:a,spaceU:i})=>`${a}${i}`};
  --min: ${({columnMinWidthV:a,columnMinWidthU:i})=>`${a}${i}`};

  && {
    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(min(var(--min), 100%), 1fr));
  }
`;try{d.displayName="LayoutContainer",d.__docgenInfo={description:"",displayName:"LayoutContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},columnMinWidthV:{defaultValue:null,description:"",name:"columnMinWidthV",required:!1,type:{name:"number"}},columnMinWidthU:{defaultValue:null,description:"",name:"columnMinWidthU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Grid/LayoutContainer.tsx#LayoutContainer"]={docgenInfo:d.__docgenInfo,name:"LayoutContainer",path:"src/components/Grid/LayoutContainer.tsx#LayoutContainer"})}catch{}const G={columnMinWidthV:o(250),columnMinWidthU:o("px"),spaceV:o(1),spaceU:o("rem")},l=h(G),x=({ref:a,as:i,children:m,...c}={...l})=>e(d,{...c,ref:a,as:i||"div",children:m}),r=p.exports.forwardRef(x);try{r.displayName="Grid",r.__docgenInfo={description:"",displayName:"Grid",props:{columnMinWidthV:{defaultValue:null,description:"",name:"columnMinWidthV",required:!1,type:{name:"number"}},columnMinWidthU:{defaultValue:null,description:"",name:"columnMinWidthU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Grid/index.tsx#Grid"]={docgenInfo:r.__docgenInfo,name:"Grid",path:"src/components/Grid/index.tsx#Grid"})}catch{}const _={columnMinWidthV:{...t.minHeight,control:{type:"number"},description:"Numeric value representing the minimum width of the grit cell",table:{...t.minHeight.table,defaultValue:{summary:l.columnMinWidthV,details:null}}},columnMinWidthU:{...t.minHeight,control:{type:"select"},options:s.Unit.length,description:"Units of columnMinWidthV",table:{...t.minHeight.table,defaultValue:{summary:l.columnMinWidthU,details:null}}},spaceV:{...t.gap,control:{type:"number"},description:"Numeric value representing the size of the grit cell gap",table:{...t.gap.table,defaultValue:{summary:l.spaceV,details:null}}},spaceU:{...t.gap,control:{type:"select"},options:s.Unit.length,description:"Units of spaceV",table:{...t.gap.table,defaultValue:{summary:l.spaceU,details:null}}}},M={title:"layout/Grid",component:r,parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react'
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
`,locationsMap:{playground:{startLoc:{col:46,line:41},endLoc:{col:1,line:54},startBody:{col:46,line:41},endBody:{col:1,line:54}}}},docs:{description:{component:"Responsive grid layout without explicit media queries"}}},argTypes:{...f,...y,...g,..._}},V=u.div`
  height: 100%;
  color: #4d608b;
`,n=u.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  height: 100px;
  width: 150px;
`,b=({children:a,...i})=>v(r,{...i,as:V,children:[e(n,{children:"one!!"}),e(n,{children:"two!!"}),e(n,{children:"three!!"}),e(n,{children:"four!!"}),e(n,{children:"five!!"}),e(n,{children:"six!!"}),e(n,{children:"seven!!"}),e(n,{children:"eight!!"}),e(n,{children:"nine!!"}),e(n,{children:"ten!!"})]}),w=b.bind({});w.args={...l};const U=["playground"];export{U as __namedExportsOrder,M as default,w as playground};
//# sourceMappingURL=Grid.stories.239ef4c8.js.map
