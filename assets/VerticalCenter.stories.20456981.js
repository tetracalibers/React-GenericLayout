import{r as p,j as r,b as v}from"./jsx-runtime.19baf7d1.js";import{s,C as h,o as f,l,K as a,r as d,d as g,a as y,b as V}from"./ref.d133f60d.js";import"./iframe.a015d09f.js";const o=s.div`
  --space: ${({spaceV:e,spaceU:n})=>`${e}${n}`};
  --padding: ${({paddingV:e,paddingU:n})=>`${e}${n}`};
  --min-height: ${({minHeightV:e,minHeightU:n})=>`${e}${n}`};

  && {
    display: flex;
    flex-direction: column;
    min-height: var(--min-height);
    padding: var(--padding);
    box-sizing: border-box;
  }

  & > * {
    /* 各子要素に上下のmarginを設定 */
    margin-top: calc(var(--space) * 0.5);
    margin-bottom: calc(var(--space) * 0.5);
  }

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }

  ${e=>h`
    & > :nth-child(${e.central}) {
      margin-top: auto;
      margin-bottom: auto;
    }
  `}
`;try{o.displayName="LayoutContainer",o.__docgenInfo={description:"",displayName:"LayoutContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},central:{defaultValue:null,description:"",name:"central",required:!1,type:{name:"number"}},spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},paddingV:{defaultValue:null,description:"",name:"paddingV",required:!1,type:{name:"number"}},paddingU:{defaultValue:null,description:"",name:"paddingU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},minHeightV:{defaultValue:null,description:"",name:"minHeightV",required:!1,type:{name:"number"}},minHeightU:{defaultValue:null,description:"",name:"minHeightU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/VerticalCenter/LayoutContainer.tsx#LayoutContainer"]={docgenInfo:o.__docgenInfo,name:"LayoutContainer",path:"src/components/VerticalCenter/LayoutContainer.tsx#LayoutContainer"})}catch{}const b={spaceV:l(1),spaceU:l("rem"),paddingV:l(1),paddingU:l("rem"),minHeightV:l(100),minHeightU:l("vh"),central:l(1)},t=f(b),x=({ref:e,as:n,children:c,...m}={...t})=>r(o,{...m,ref:e,as:n||"div",children:c}),u=p.exports.forwardRef(x);try{u.displayName="VerticalCenter",u.__docgenInfo={description:"",displayName:"VerticalCenter",props:{central:{defaultValue:null,description:"",name:"central",required:!1,type:{name:"number"}},spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},paddingV:{defaultValue:null,description:"",name:"paddingV",required:!1,type:{name:"number"}},paddingU:{defaultValue:null,description:"",name:"paddingU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},minHeightV:{defaultValue:null,description:"",name:"minHeightV",required:!1,type:{name:"number"}},minHeightU:{defaultValue:null,description:"",name:"minHeightU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/VerticalCenter/index.tsx#VerticalCenter"]={docgenInfo:u.__docgenInfo,name:"VerticalCenter",path:"src/components/VerticalCenter/index.tsx#VerticalCenter"})}catch{}const C={central:{control:{type:"number"},description:"A number indicating how many of the child elements the element to be vertically centered is, or the tag name or component name of the element",table:{type:{summary:null},category:"style",defaultValue:{summary:t.central,details:null}}},spaceV:{...a.margin,control:{type:"number"},description:"Numerical value indicating the size of the gap between each item",table:{...a.margin.table,defaultValue:{summary:t.spaceV,details:null}}},spaceU:{...a.margin,control:{type:"select"},options:d.Unit.length,description:"Units of spaceV",table:{...a.margin.table,defaultValue:{summary:t.spaceU,details:null}}},paddingV:{...a.padding,control:{type:"number"},description:"Numeric value representing the size of the space between the four sides of the Slider and the child elements.",table:{...a.padding.table,defaultValue:{summary:t.paddingV,details:null}}},paddingU:{...a.padding,control:{type:"select"},options:d.Unit.length,description:"Units of paddingV",table:{...a.padding.table,defaultValue:{summary:t.paddingU,details:null}}},minHeightV:{...a.minHeight,control:{type:"number"},description:"A number representing the minimum height of the entire component",table:{...a.minHeight.table,defaultValue:{summary:t.minHeightV,details:null}}},minHeightU:{...a.minHeight,control:{type:"select"},options:d.Unit.length,description:"Units of spaceV",table:{...a.minHeight.table,defaultValue:{summary:t.minHeightU,details:null}}}},I={title:"layout/VerticalCenter",component:u,parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react'
import { VerticalCenter } from '../components/VerticalCenter'
import { defaultProps } from '../components/VerticalCenter/model'
import { desc_VerticalCenterProps } from './args/VerticalCenter'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React from 'react'

export default {
  title: 'layout/VerticalCenter',
  component: VerticalCenter,
  parameters: {
    docs: {
      description: {
        component:
          'Elements to be vertically centered within a specific area and the elements contained in that area'
      }
    }
  },
  argTypes: {
    ...desc_as,
    ...desc_ref,
    ...desc_children,
    ...desc_VerticalCenterProps
  }
}

const NeedScrollContainer = styled.div\`
  height: 200vh;
  color: #4d608b;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
\`

const Item = styled.div\`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  height: 100px;
  width: 100%;
\`

const Template: ComponentStory<typeof VerticalCenter> = ({
  children,
  ...args
}) => (
  <VerticalCenter {...args} as={NeedScrollContainer}>
    <Item>one!!</Item>
    <Item>two!!</Item>
    <Item>three!!</Item>
    <Item>four!!</Item>
    <Item>five!!</Item>
  </VerticalCenter>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
`,locationsMap:{playground:{startLoc:{col:56,line:44},endLoc:{col:1,line:55},startBody:{col:56,line:44},endBody:{col:1,line:55}}}},docs:{description:{component:"Elements to be vertically centered within a specific area and the elements contained in that area"}}},argTypes:{...g,...y,...V,...C}},_=s.div`
  height: 200vh;
  color: #4d608b;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`,i=s.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  height: 100px;
  width: 100%;
`,w=({children:e,...n})=>v(u,{...n,as:_,children:[r(i,{children:"one!!"}),r(i,{children:"two!!"}),r(i,{children:"three!!"}),r(i,{children:"four!!"}),r(i,{children:"five!!"})]}),U=w.bind({});U.args={...t};const L=["playground"];export{L as __namedExportsOrder,I as default,U as playground};
//# sourceMappingURL=VerticalCenter.stories.20456981.js.map
