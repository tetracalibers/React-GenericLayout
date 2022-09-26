import{r as u,j as r,b as f}from"./jsx-runtime.865fbaf1.js";import{s as d,C as g,o as O,l as i,K as n,r as h,d as L,a as x,b}from"./ref.04e71c84.js";import{d as c}from"./index.72bc7699.js";import"./iframe.c5e8b698.js";import"./index.3bc3f484.js";const p=d.div`
  --position: ${({fixed:e})=>e?"fixed":"absolute"};

  && {
    position: var(--position);
    /* 左上の角が中央になるように配置 */
    top: 50%;
    left: 50%;
    /* 要素の中央がコンテナの中央になるよう修正 */
    transform: translate(-50%, -50%);

    /* はみ出し対策 */
    ${({contain:e,marginV:a,marginU:l})=>e&&g`
        /* 単位を含めないとcalc関数が無効になってしまう */
        --margin: ${a}${l};

        /* コンテンツが隠れてしまわないようスクロールバーを提供 */
        overflow: auto;
        /* marginも含めて高さと幅を制限 */
        max-width: calc(100% - var(--margin) * 2);
        max-height: calc(100% - var(--margin) * 2);
      `}
  }
`;try{p.displayName="Overlay",p.__docgenInfo={description:"",displayName:"Overlay",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},fixed:{defaultValue:null,description:"",name:"fixed",required:!1,type:{name:"boolean"}},contain:{defaultValue:null,description:"",name:"contain",required:!1,type:{name:"boolean"}},marginV:{defaultValue:null,description:"",name:"marginV",required:!1,type:{name:"number"}},marginU:{defaultValue:null,description:"",name:"marginU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/OverlapLayer/Overlay.tsx#Overlay"]={docgenInfo:p.__docgenInfo,name:"Overlay",path:"src/components/OverlapLayer/Overlay.tsx#Overlay"})}catch{}const s=d.div`
  position: relative;
`;try{s.displayName="OverlayOrigin",s.__docgenInfo={description:"",displayName:"OverlayOrigin",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/OverlapLayer/OverlayOrigin.tsx#OverlayOrigin"]={docgenInfo:s.__docgenInfo,name:"OverlayOrigin",path:"src/components/OverlapLayer/OverlayOrigin.tsx#OverlayOrigin"})}catch{}const _=({children:e,as:a,...l},m)=>r(p,{as:a||"div",...l,ref:m,children:e}),S=u.exports.forwardRef(_),w=({children:e,as:a,...l},m)=>r(s,{as:a||"div",ref:m,...l,children:e}),t={Origin:u.exports.forwardRef(w),Upper:S},V={fixed:i(!1),contain:i(!0),marginV:i(0),marginU:i("rem")},o=O(V),T={fixed:{...n.position,control:{type:"boolean"},description:"Whether to fix to the center of the screen and follow scrolling or not",table:{...n.position.table,defaultValue:{summary:o.fixed,details:null}}},contain:{control:{type:"boolean"},description:"Whether to guarantee that the layer above will not extend beyond the area of the layer below",table:{type:{summary:null},category:"style",defaultValue:{summary:o.contain,details:null}}},marginV:{...n.margin,control:{type:"number"},description:"A number indicating the minimum margin between the four edges of the lower layer and the four edges of the upper layer",table:{...n.margin.table,defaultValue:{summary:o.marginV,details:null}}},marginU:{...n.margin,control:{type:"select"},options:h.Unit.length,description:"Unit of the number specified by marginValue",table:{...n.margin.table,defaultValue:{summary:o.marginU,details:null}}}},P={title:"layout/OverlapLayer",component:t,parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react'
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
        component: 'Layout with layers on top of layers'
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
`,locationsMap:{"overflow-sample":{startLoc:{col:63,line:42},endLoc:{col:1,line:54},startBody:{col:63,line:42},endBody:{col:1,line:54}},"scroll-tracking-sample":{startLoc:{col:69,line:61},endLoc:{col:1,line:73},startBody:{col:69,line:61},endBody:{col:1,line:73}}}},docs:{description:{component:"Layout with layers on top of layers"}}},argTypes:{...L,...x,...b,...T}},y=d.div`
  color: #4d608b;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`,v=d.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe;
  color: #4d608b;
`,U=({children:e,...a})=>f(t.Origin,{children:[r(t.Upper,{...a,as:v,children:r(c.LoremIpsum,{})}),r(y,{children:r(c.LoremIpsum,{})})]}),C=U.bind({});C.args={...o};const k=({children:e,...a})=>f(t.Origin,{children:[r(t.Upper,{...a,as:v,children:r(c.LoremIpsum,{})}),r(y,{children:r(c.LoremIpsum,{p:10})})]}),I=k.bind({});I.args={...o};const K=["overflowSample","scrollTrackingSample"];export{K as __namedExportsOrder,P as default,C as overflowSample,I as scrollTrackingSample};
//# sourceMappingURL=OverlapLayer.stories.3f1185bb.js.map
