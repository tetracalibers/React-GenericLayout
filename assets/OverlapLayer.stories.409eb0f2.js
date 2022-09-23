import{r as u,j as r,b as f}from"./jsx-runtime.cfad2831.js";import{s as d,C as g,o as O,l as i,K as a,r as h,d as b,a as x,b as L}from"./ref.c1631335.js";import{d as c}from"./index.52397440.js";import"./iframe.c2191ef2.js";import"./index.3bc3f484.js";const s=d.div`
  --position: ${({fixed:e})=>e?"fixed":"absolute"};

  && {
    position: var(--position);
    /* 左上の角が中央になるように配置 */
    top: 50%;
    left: 50%;
    /* 要素の中央がコンテナの中央になるよう修正 */
    transform: translate(-50%, -50%);

    /* はみ出し対策 */
    ${({contain:e,marginV:n,marginU:o})=>e&&g`
        /* 単位を含めないとcalc関数が無効になってしまう */
        --margin: ${n}${o};

        /* コンテンツが隠れてしまわないようスクロールバーを提供 */
        overflow: auto;
        /* marginも含めて高さと幅を制限 */
        max-width: calc(100% - var(--margin) * 2);
        max-height: calc(100% - var(--margin) * 2);
      `}
  }
`;try{s.displayName="Overlay",s.__docgenInfo={description:"",displayName:"Overlay",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},fixed:{defaultValue:null,description:"",name:"fixed",required:!1,type:{name:"boolean"}},contain:{defaultValue:null,description:"",name:"contain",required:!1,type:{name:"boolean"}},marginV:{defaultValue:null,description:"",name:"marginV",required:!1,type:{name:"number"}},marginU:{defaultValue:null,description:"",name:"marginU",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"em"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/OverlapLayer/Overlay.tsx#Overlay"]={docgenInfo:s.__docgenInfo,name:"Overlay",path:"src/components/OverlapLayer/Overlay.tsx#Overlay"})}catch{}const p=d.div`
  position: relative;
`;try{p.displayName="OverlayOrigin",p.__docgenInfo={description:"",displayName:"OverlayOrigin",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/OverlapLayer/OverlayOrigin.tsx#OverlayOrigin"]={docgenInfo:p.__docgenInfo,name:"OverlayOrigin",path:"src/components/OverlapLayer/OverlayOrigin.tsx#OverlayOrigin"})}catch{}const _=({children:e,as:n,ref:o,...m})=>r(s,{as:n||"div",...m,ref:o,children:e}),S=u.exports.forwardRef(_),w=({children:e,as:n,ref:o,...m})=>r(p,{as:n||"div",ref:o,...m,children:e}),t={Origin:u.exports.forwardRef(w),Upper:S},V={fixed:i(!1),contain:i(!0),marginV:i(0),marginU:i("rem")},l=O(V),T={fixed:{...a.position,control:{type:"boolean"},description:"Whether to fix to the center of the screen and follow scrolling or not",table:{...a.position.table,defaultValue:{summary:l.fixed,details:null}}},contain:{control:{type:"boolean"},description:"Whether to guarantee that the layer above will not extend beyond the area of the layer below",table:{type:{summary:null},category:"style",defaultValue:{summary:l.contain,details:null}}},marginV:{...a.margin,control:{type:"number"},description:"A number indicating the minimum margin between the four edges of the lower layer and the four edges of the upper layer",table:{...a.margin.table,defaultValue:{summary:l.marginV,details:null}}},marginU:{...a.margin,control:{type:"select"},options:h.Unit.length,description:"Unit of the number specified by marginValue",table:{...a.margin.table,defaultValue:{summary:l.marginU,details:null}}}},P={title:"layout/OverlapLayer",component:t,parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react'
import { OverlapLayer } from '../components/OverlapLayer'
import { defaultUpperProps } from '../components/OverlapLayer/model/upper'
import { desc_OverlapLayerProps } from './args/OverlapLayer'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

export default {
  title: 'layout/OverlapLayer',
  component: OverlapLayer,
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
    ...desc_OverlapLayerProps
  }
}

const SampleBackContent = styled.div\`
  color: #4d608b;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
\`

const SamplePanel = styled.div\`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe;
  color: #4d608b;
\`

const OverflowVer: ComponentStory<typeof OverlapLayer.Upper> = ({
  children,
  ...args
}) => (
  <OverlapLayer.Origin>
    <OverlapLayer.Upper {...args} as={SamplePanel}>
      <LoremIpsum />
    </OverlapLayer.Upper>
    <SampleBackContent>
      <LoremIpsum />
    </SampleBackContent>
  </OverlapLayer.Origin>
)

export const overflowSample = OverflowVer.bind({})
overflowSample.args = {
  ...defaultUpperProps
}

const ScrollTrackingVer: ComponentStory<typeof OverlapLayer.Upper> = ({
  children,
  ...args
}) => (
  <OverlapLayer.Origin>
    <OverlapLayer.Upper {...args} as={SamplePanel}>
      <LoremIpsum />
    </OverlapLayer.Upper>
    <SampleBackContent>
      <LoremIpsum p={10} />
    </SampleBackContent>
  </OverlapLayer.Origin>
)

export const scrollTrackingSample = ScrollTrackingVer.bind({})
scrollTrackingSample.args = {
  ...defaultUpperProps
}
`,locationsMap:{"overflow-sample":{startLoc:{col:63,line:42},endLoc:{col:1,line:54},startBody:{col:63,line:42},endBody:{col:1,line:54}},"scroll-tracking-sample":{startLoc:{col:69,line:61},endLoc:{col:1,line:73},startBody:{col:69,line:61},endBody:{col:1,line:73}}}},docs:{description:{component:"Suitable solution for centering elements horizontally"}}},argTypes:{...b,...x,...L,...T}},y=d.div`
  color: #4d608b;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`,v=d.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe;
  color: #4d608b;
`,U=({children:e,...n})=>f(t.Origin,{children:[r(t.Upper,{...n,as:v,children:r(c.LoremIpsum,{})}),r(y,{children:r(c.LoremIpsum,{})})]}),C=U.bind({});C.args={...l};const k=({children:e,...n})=>f(t.Origin,{children:[r(t.Upper,{...n,as:v,children:r(c.LoremIpsum,{})}),r(y,{children:r(c.LoremIpsum,{p:10})})]}),I=k.bind({});I.args={...l};const K=["overflowSample","scrollTrackingSample"];export{K as __namedExportsOrder,P as default,C as overflowSample,I as scrollTrackingSample};
//# sourceMappingURL=OverlapLayer.stories.409eb0f2.js.map
