import{r as m,j as a,b as v}from"./jsx-runtime.c3376952.js";import{s,C as h,o as f,l as r,K as o,r as u,d as S,a as y,b as k}from"./ref.5aa4f0a3.js";import"./iframe.6deac106.js";const c=s.div`
  --space: ${({spaceV:e,spaceU:n})=>`${e}${n}`};
  --breakpoint: ${({breakpointV:e,breakpointU:n})=>`${e}${n}`};

  && {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space);
  }

  && > * > * {
    /* 子要素の伸長を許可 */
    flex-grow: 1;
    /* breakpointでレイアウトを切り替え */
    flex-basis: calc((var(--breakpoint) - 100%) * 999);
  }

  /* limit以上の子要素が存在すれば縦並びに切り替え */
  ${({limit:e})=>h`
      && > :nth-last-child(n + ${e}),
      && > :nth-last-child(n + ${e}) ~ * {
        flex-basis: 100%;
      }
    `}
`;try{c.displayName="LayoutContainer",c.__docgenInfo={description:"",displayName:"LayoutContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}},breakpointV:{defaultValue:null,description:"",name:"breakpointV",required:!1,type:{name:"number"}},breakpointU:{defaultValue:null,description:"",name:"breakpointU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SwitchStack/LayoutContainer.tsx#LayoutContainer"]={docgenInfo:c.__docgenInfo,name:"LayoutContainer",path:"src/components/SwitchStack/LayoutContainer.tsx#LayoutContainer"})}catch{}const b={limit:r(4),spaceV:r(1.7),spaceU:r("rem"),breakpointV:r(30),breakpointU:r("rem")},l=f(b),w=({ref:e,as:n,children:d,...p}={...l})=>a(c,{...p,ref:e,as:n||"div",children:d}),i=m.exports.forwardRef(w);try{i.displayName="SwitchStack",i.__docgenInfo={description:"",displayName:"SwitchStack",props:{spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}},breakpointV:{defaultValue:null,description:"",name:"breakpointV",required:!1,type:{name:"number"}},breakpointU:{defaultValue:null,description:"",name:"breakpointU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SwitchStack/index.tsx#SwitchStack"]={docgenInfo:i.__docgenInfo,name:"SwitchStack",path:"src/components/SwitchStack/index.tsx#SwitchStack"})}catch{}const g={limit:{control:{type:"number"},description:"Maximum number of items that can be lined up in a horizontal layout",table:{type:{summary:null},category:"style",defaultValue:{summary:l.limit,details:null}}},spaceV:{...o.gap,control:{type:"number"},description:"Numeric value representing the spacing of elements horizontally aligned",table:{...o.gap.table,defaultValue:{summary:l.spaceV,details:null}}},spaceU:{...o.gap,control:{type:"select"},options:u.Unit.length,description:"Units of spaceV",table:{...o.gap.table,defaultValue:{summary:l.spaceU,details:null}}},breakpointV:{control:{type:"number"},description:"Numeric value representing the breakpoints that switch from horizontal to vertical alignment",table:{type:{summary:null},category:"style",defaultValue:{summary:l.breakpointV,details:null}}},breakpointU:{control:{type:"select"},options:u.Unit.length,description:"Units of spaceV",table:{type:{summary:null},category:"style",defaultValue:{summary:l.breakpointU,details:null}}}},q={title:"layout/SwitchStack",component:i,parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react'
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

const FitHeightContainer = styled.div\`
  height: 100%;
  color: #4d608b;
\`

const StackItem = styled.div\`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  height: 100px;
  width: 150px;
\`

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
`,locationsMap:{playground:{startLoc:{col:53,line:42},endLoc:{col:1,line:58},startBody:{col:53,line:42},endBody:{col:1,line:58}}}},docs:{description:{component:"Suitable solution to achieve a responsive layout with a sidebar on one side"}}},argTypes:{...S,...y,...k,...g}},x=s.div`
  height: 100%;
  color: #4d608b;
`,t=s.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  height: 100px;
  width: 150px;
`,_=({children:e,...n})=>v(i,{...n,as:x,children:[a(t,{children:"one!!"}),a(t,{children:"two!!"}),a(t,{children:"three!!"}),a(t,{children:"four!!"}),a(t,{children:"five!!"}),a(t,{children:"six!!"}),a(t,{children:"seven!!"}),a(t,{children:"eight!!"}),a(t,{children:"nine!!"}),a(t,{children:"ten!!"})]}),V=_.bind({});V.args={...l};const L=["playground"];export{L as __namedExportsOrder,q as default,V as playground};
//# sourceMappingURL=SwitchStack.stories.60c7f86c.js.map
