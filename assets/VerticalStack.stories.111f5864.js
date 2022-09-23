import{r as f,j as t,b as u}from"./jsx-runtime.83dd56e8.js";import{s as d,C as s,o as v,l,K as c,r as y,d as S,a as h,b as g}from"./ref.f9d68167.js";import"./iframe.4683076c.js";const i=d.div`
  --margin-top: ${({spaceV:e,spaceU:r})=>`${e}${r}`};

  && {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  && > * {
    /* 既存の垂直marginを削除 */
    margin-top: 0;
    margin-bottom: 0;
  }

  /* 連続する要素にだけmargin適用 */
  ${({recursive:e})=>e?s`
          && * + * {
            margin-top: var(--margin-top);
          }
        `:s`
          && > * + * {
            margin-top: var(--margin-top);
          }
        `}

  ${({separateFrom:e})=>e&&s`
        && > :nth-child(${e}) {
          margin-bottom: auto;
        }
      `}
`;try{i.displayName="LayoutContainer",i.__docgenInfo={description:"",displayName:"LayoutContainer",props:{spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"em"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},recursive:{defaultValue:null,description:"",name:"recursive",required:!1,type:{name:"boolean"}},separateFrom:{defaultValue:null,description:"",name:"separateFrom",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/VerticalStack/LayoutContainer.tsx#LayoutContainer"]={docgenInfo:i.__docgenInfo,name:"LayoutContainer",path:"src/components/VerticalStack/LayoutContainer.tsx#LayoutContainer"})}catch{}const V={recursive:l(!1),separateFrom:l(0),spaceV:l(1),spaceU:l("rem")},n=v(V),k=({ref:e,as:r,children:m,...p}={...n})=>t(i,{...p,ref:e,as:r||"div",children:m}),o=f.exports.forwardRef(k);try{o.displayName="VerticalStack",o.__docgenInfo={description:"",displayName:"VerticalStack",props:{spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"em"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},recursive:{defaultValue:null,description:"",name:"recursive",required:!1,type:{name:"boolean"}},separateFrom:{defaultValue:null,description:"",name:"separateFrom",required:!1,type:{name:"number"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/VerticalStack/index.tsx#VerticalStack"]={docgenInfo:o.__docgenInfo,name:"VerticalStack",path:"src/components/VerticalStack/index.tsx#VerticalStack"})}catch{}const _={recursive:{control:{type:"boolean"},description:"Whether to apply layout to nested elements",table:{type:{summary:null},category:"style",defaultValue:{summary:n.recursive,details:null}}},separateFrom:{control:{type:"number"},description:"Separator to group elements up and down",table:{type:{summary:null},category:"style",defaultValue:{summary:n.separateFrom,details:null}}},spaceV:{...c.margin,control:{type:"number"},description:"Numeric value representing the spacing of elements in a vertical line",table:{...c.margin.table,defaultValue:{summary:n.spaceV,details:null}}},spaceU:{...c.margin,control:{type:"select"},options:y.Unit.length,description:"Units of spaceV",table:{...c.margin.table,defaultValue:{summary:n.spaceU,details:null}}}},L={title:"layout/VerticalStack",component:o,parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react'
import { VerticalStack } from '../components/VerticalStack'
import { defaultProps } from '../components/VerticalStack/model'
import { desc_VerticalStackProps } from './args/VerticalStack'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React from 'react'

export default {
  title: 'layout/VerticalStack',
  component: VerticalStack,
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
    ...desc_VerticalStackProps
  }
}

const NeedScrollContainer = styled.div\`
  height: 200vh;
  color: #4d608b;
\`

const StackItem = styled.div\`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  margin: 0 2em;
  min-height: 100px;
  height: auto;
\`

const Template: ComponentStory<typeof VerticalStack> = ({
  children,
  ...args
}) => (
  <VerticalStack {...args} as={NeedScrollContainer}>
    <StackItem>Top!!</StackItem>
    <StackItem>Middle!!</StackItem>
    <StackItem>Bottom!!</StackItem>
    <StackItem>
      <StackItem>Inner Top!!</StackItem>
      <StackItem>Inner Middle!!</StackItem>
      <StackItem>Inner Bottom!!</StackItem>
    </StackItem>
  </VerticalStack>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
`,locationsMap:{playground:{startLoc:{col:55,line:43},endLoc:{col:1,line:57},startBody:{col:55,line:43},endBody:{col:1,line:57}}}},docs:{description:{component:"Suitable solution to achieve a responsive layout with a sidebar on one side"}}},argTypes:{...S,...h,...g,..._}},b=d.div`
  height: 200vh;
  color: #4d608b;
`,a=d.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  margin: 0 2em;
  min-height: 100px;
  height: auto;
`,x=({children:e,...r})=>u(o,{...r,as:b,children:[t(a,{children:"Top!!"}),t(a,{children:"Middle!!"}),t(a,{children:"Bottom!!"}),u(a,{children:[t(a,{children:"Inner Top!!"}),t(a,{children:"Inner Middle!!"}),t(a,{children:"Inner Bottom!!"})]})]}),I=x.bind({});I.args={...n};const q=["playground"];export{q as __namedExportsOrder,L as default,I as playground};
//# sourceMappingURL=VerticalStack.stories.111f5864.js.map
