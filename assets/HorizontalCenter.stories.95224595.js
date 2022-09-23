import{r as c,j as i}from"./jsx-runtime.82875ac4.js";import{s as d,C as u,o as v,l as t,K as n,r as s,d as f,a as h,b as x}from"./ref.45a96292.js";import"./iframe.5091b0a1.js";const o=d.div`
  --paddingX: ${e=>e.paddingXV+e.paddingXU};
  --max-width: ${e=>e.maxWidthV+e.maxWidthU};

  ${({byContentWidth:e})=>e&&u`
      && {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}

  ${({textCenter:e})=>e&&u`
      && {
        text-align: center;
      }
    `}
  
  && {
    box-sizing: border-box;
    padding-left: var(--paddingX);
    padding-right: var(--paddingX);
  }

  && > * {
    /* paddingを幅の計算から除外 */
    box-sizing: content-box;
    max-width: var(--max-width);
    margin-left: auto;
    margin-right: auto;
  }
`;try{o.displayName="LayoutContainer",o.__docgenInfo={description:"",displayName:"LayoutContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},textCenter:{defaultValue:null,description:"",name:"textCenter",required:!1,type:{name:"boolean"}},byContentWidth:{defaultValue:null,description:"",name:"byContentWidth",required:!1,type:{name:"boolean"}},paddingXV:{defaultValue:null,description:"",name:"paddingXV",required:!1,type:{name:"number"}},paddingXU:{defaultValue:null,description:"",name:"paddingXU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},maxWidthV:{defaultValue:null,description:"",name:"maxWidthV",required:!1,type:{name:"number"}},maxWidthU:{defaultValue:null,description:"",name:"maxWidthU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/HorizontalCenter/LayoutContainer.tsx#LayoutContainer"]={docgenInfo:o.__docgenInfo,name:"LayoutContainer",path:"src/components/HorizontalCenter/LayoutContainer.tsx#LayoutContainer"})}catch{}const y={textCenter:t(!1),byContentWidth:t(!1),paddingXV:t(1),paddingXU:t("rem"),maxWidthV:t(30),maxWidthU:t("rem")},a=v(y),g=({ref:e,as:r,children:p,...m}={...a})=>i(o,{...m,ref:e,as:r||"div",children:p}),l=c.exports.forwardRef(g);try{l.displayName="HorizontalCenter",l.__docgenInfo={description:"",displayName:"HorizontalCenter",props:{textCenter:{defaultValue:null,description:"",name:"textCenter",required:!1,type:{name:"boolean"}},byContentWidth:{defaultValue:null,description:"",name:"byContentWidth",required:!1,type:{name:"boolean"}},paddingXV:{defaultValue:null,description:"",name:"paddingXV",required:!1,type:{name:"number"}},paddingXU:{defaultValue:null,description:"",name:"paddingXU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},maxWidthV:{defaultValue:null,description:"",name:"maxWidthV",required:!1,type:{name:"number"}},maxWidthU:{defaultValue:null,description:"",name:"maxWidthU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/HorizontalCenter/index.tsx#HorizontalCenter"]={docgenInfo:l.__docgenInfo,name:"HorizontalCenter",path:"src/components/HorizontalCenter/index.tsx#HorizontalCenter"})}catch{}const C={paddingXV:{...n.padding,control:{type:"number"},description:"Space at both ends of content",table:{...n.padding.table,defaultValue:{summary:a.paddingXV,details:null}}},paddingXU:{...n.padding,control:{type:"select"},options:s.Unit.length,description:"Units of paddingXV",table:{...n.padding.table,defaultValue:{summary:a.paddingXU,details:null}}},maxWidthV:{...n.maxWidth,control:{type:"number"},description:"Space at both ends of content",table:{...n.maxWidth.table,defaultValue:{summary:a.maxWidthV,details:null}}},maxWidthU:{...n.maxWidth,control:{type:"select"},options:s.Unit.length,description:"Units of maxWidthV",table:{...n.maxWidth.table,defaultValue:{summary:a.maxWidthU,details:null}}},textCenter:{...n.textAlign,control:{type:"boolean"},description:"Whether text is also centered or not",table:{...n.textAlign.table,defaultValue:{summary:a.textCenter,details:null}}},byContentWidth:{control:{type:"boolean"},description:"Whether to center child elements based on their content width",table:{type:{summary:null},category:"style",defaultValue:{summary:a.byContentWidth,details:null}}}},S={title:"layout/HorizontalCenter",component:l,parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react'
import { HorizontalCenter } from '../components/HorizontalCenter'
import { defaultProps } from '../components/HorizontalCenter/model'
import { desc_HorizontalCenterProps } from './args/HorizontalCenter'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React from 'react'

export default {
  title: 'layout/HorizontalCenter',
  component: HorizontalCenter,
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
    ...desc_HorizontalCenterProps
  }
}

const FullWidthContainer = styled.div\`
  width: 100%;
  color: #4d608b;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
\`

const Item = styled.div\`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  height: 100px;
\`

const Template: ComponentStory<typeof HorizontalCenter> = ({
  children,
  ...args
}) => (
  <HorizontalCenter {...args} as={FullWidthContainer}>
    <Item>Centering!!</Item>
  </HorizontalCenter>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
`,locationsMap:{playground:{startLoc:{col:58,line:42},endLoc:{col:1,line:49},startBody:{col:58,line:42},endBody:{col:1,line:49}}}},docs:{description:{component:"Suitable solution for centering elements horizontally"}}},argTypes:{...f,...h,...x,...C}},b=d.div`
  width: 100%;
  color: #4d608b;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`,_=d.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  height: 100px;
`,V=({children:e,...r})=>i(l,{...r,as:b,children:i(_,{children:"Centering!!"})}),W=V.bind({});W.args={...a};const U=["playground"];export{U as __namedExportsOrder,S as default,W as playground};
//# sourceMappingURL=HorizontalCenter.stories.95224595.js.map
