import{r as m,j as s}from"./jsx-runtime.865fbaf1.js";import{s as p,o as l,l as i,K as a,d as u,a as f,b as y}from"./ref.04e71c84.js";import"./iframe.c5e8b698.js";const n=p.div`
  --height: ${({ratioY:e})=>e};
  --width: ${({ratioX:e})=>e};

  && {
    padding-bottom: calc(var(--height) / var(--width) * 100%);
    position: relative;
  }

  & > * {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > img,
  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;try{n.displayName="LayoutContainer",n.__docgenInfo={description:"",displayName:"LayoutContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},ratioX:{defaultValue:null,description:"",name:"ratioX",required:!1,type:{name:"number"}},ratioY:{defaultValue:null,description:"",name:"ratioY",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/AspectFrame/LayoutContainer.tsx#LayoutContainer"]={docgenInfo:n.__docgenInfo,name:"LayoutContainer",path:"src/components/AspectFrame/LayoutContainer.tsx#LayoutContainer"})}catch{}const g={ratioX:i(16),ratioY:i(9)},o=l(g),_=({as:e,children:r,...c}={...o},d)=>s(n,{...c,ref:d,as:e||"div",children:r}),t=m.exports.forwardRef(_);try{t.displayName="AspectFrame",t.__docgenInfo={description:"",displayName:"AspectFrame",props:{ratioX:{defaultValue:null,description:"",name:"ratioX",required:!1,type:{name:"number"}},ratioY:{defaultValue:null,description:"",name:"ratioY",required:!1,type:{name:"number"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/AspectFrame/index.tsx#AspectFrame"]={docgenInfo:t.__docgenInfo,name:"AspectFrame",path:"src/components/AspectFrame/index.tsx#AspectFrame"})}catch{}const h={ratioX:{...a.aspectRatio,control:{type:"number"},description:"Width as denominator of aspect ratio",table:{...a.aspectRatio.table,defaultValue:{summary:o.ratioX,details:null}}},ratioY:{...a.aspectRatio,control:{type:"number"},description:"Height as the numerator of the aspect ratio",table:{...a.aspectRatio.table,defaultValue:{summary:o.ratioY,details:null}}}},A="/polym-generic-layout/assets/scenery.a739f0dc.jpg",R={title:"layout/AspectFrame",component:t,parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react'
import { AspectFrame } from '../components/AspectFrame'
import { defaultProps } from '../components/AspectFrame/model'
import { desc_AspectFrameProps } from './args/AspectFrame'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import sampleImage from './polym-generic-layout/assets/scenery.jpg'
import React from 'react'

export default {
  title: 'layout/AspectFrame',
  component: AspectFrame,
  parameters: {
    docs: {
      description: {
        component: 'Responsive images with preserved aspect ratio'
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

const ExampleContainer = styled.div\`
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  height: 100%;
  width: 100%;
  box-sizing: padding-box;
\`

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
`,locationsMap:{playground:{startLoc:{col:53,line:37},endLoc:{col:1,line:44},startBody:{col:53,line:37},endBody:{col:1,line:44}}}},docs:{description:{component:"Responsive images with preserved aspect ratio"}}},argTypes:{...u,...f,...y,...h}},x=p.div`
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  height: 100%;
  width: 100%;
  box-sizing: padding-box;
`,b=({children:e,...r})=>s(t,{...r,as:x,children:s("img",{src:A})}),F=b.bind({});F.args={...o};const L=["playground"];export{L as __namedExportsOrder,R as default,F as playground};
//# sourceMappingURL=AspectFrame.stories.ca861ec9.js.map
