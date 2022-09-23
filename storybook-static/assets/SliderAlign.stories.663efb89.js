import{r as v,j as n,b as p}from"./jsx-runtime.c3376952.js";import{s,C as h,o as g,l as r,K as a,r as u,d as f,a as b,b as y}from"./ref.5aa4f0a3.js";import"./iframe.6deac106.js";const d=s.div`
  --space: ${({spaceV:e,spaceU:i})=>`${e}${i}`};
  --padding: ${({paddingV:e,paddingU:i})=>`${e}${i}`};
  --bar-bgcolor: ${({barBgColor:e})=>e};
  --bar-color: ${({barColor:e})=>e};
  --bar-height: ${({barHeightV:e,barHeightU:i})=>`${e}${i}`};
  --height: ${({height:e})=>e};
  --item-width: ${({itemWidth:e})=>e};

  && {
    display: flex;
    height: var(--height);
    overflow-x: auto;
    overflow-y: hidden;
    box-sizing: border-box;
    padding: var(--padding);

    /* for Firefox */
    scrollbar-color: var(--bar-color) var(--bar-bgcolor);
  }

  &::-webkit-scrollbar {
    height: var(--bar-height);
  }

  &::-webkit-scrollbar-track {
    background-color: var(--bar-bgcolor);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--bar-bgcolor);

    /* 線形グラデーションによって背景の中につまみを描画 */
    background-image: linear-gradient(
      var(--bar-bgcolor) 0,
      var(--bar-bgcolor) calc(var(--bar-height) * 0.3),
      var(--bar-color) calc(var(--bar-height) * 0.3),
      var(--bar-color) calc(var(--bar-height) * 0.7),
      var(--bar-bgcolor) calc(var(--bar-height) * 0.7)
    );
  }

  & > * {
    /* デフォルトではflex-shrink: 1;が適用されているため、widthだけではうまく機能しない */
    flex: 0 0 var(--item-width);
  }

  /* 画像のリセット */
  & > img {
    height: 100%;
    flex-basis: auto;
    width: auto;
  }

  /* 連続する要素のみ */
  & > * + * {
    margin-left: var(--space);
  }

  /* スクロールバー削除 */
  ${({hideScrollBar:e})=>e&&h`
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }
      `}
`;try{d.displayName="SlideContainer",d.__docgenInfo={description:"",displayName:"SlideContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"Height<0 | (string & {})>"}},spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},barHeightV:{defaultValue:null,description:"",name:"barHeightV",required:!1,type:{name:"number"}},barHeightU:{defaultValue:null,description:"",name:"barHeightU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},hideScrollBar:{defaultValue:null,description:"",name:"hideScrollBar",required:!1,type:{name:"boolean"}},paddingV:{defaultValue:null,description:"",name:"paddingV",required:!1,type:{name:"number"}},paddingU:{defaultValue:null,description:"",name:"paddingU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},itemWidth:{defaultValue:null,description:"",name:"itemWidth",required:!1,type:{name:"Width<0 | (string & {})>"}},barBgColor:{defaultValue:null,description:"",name:"barBgColor",required:!1,type:{name:"BackgroundColor"}},barColor:{defaultValue:null,description:"",name:"barColor",required:!1,type:{name:"Color"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SliderAlign/SlideContainer.tsx#SlideContainer"]={docgenInfo:d.__docgenInfo,name:"SlideContainer",path:"src/components/SliderAlign/SlideContainer.tsx#SlideContainer"})}catch{}const S={spaceV:r(.5),spaceU:r("rem"),barHeightV:r(1),barHeightU:r("rem"),hideScrollBar:r(!1),paddingV:r(.75),paddingU:r("rem"),itemWidth:r("auto"),height:r("auto"),barBgColor:r("#fff"),barColor:r("#B0BEC5")},l=g(S),V=({ref:e,as:i,children:c,...m}={...l})=>n(d,{...m,ref:e,as:i||"div",children:c}),o=v.exports.forwardRef(V);try{o.displayName="SliderAlign",o.__docgenInfo={description:"",displayName:"SliderAlign",props:{height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"Height<0 | (string & {})>"}},spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},barHeightV:{defaultValue:null,description:"",name:"barHeightV",required:!1,type:{name:"number"}},barHeightU:{defaultValue:null,description:"",name:"barHeightU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},hideScrollBar:{defaultValue:null,description:"",name:"hideScrollBar",required:!1,type:{name:"boolean"}},paddingV:{defaultValue:null,description:"",name:"paddingV",required:!1,type:{name:"number"}},paddingU:{defaultValue:null,description:"",name:"paddingU",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"px"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},itemWidth:{defaultValue:null,description:"",name:"itemWidth",required:!1,type:{name:"Width<0 | (string & {})>"}},barBgColor:{defaultValue:null,description:"",name:"barBgColor",required:!1,type:{name:"BackgroundColor"}},barColor:{defaultValue:null,description:"",name:"barColor",required:!1,type:{name:"Color"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SliderAlign/index.tsx#SliderAlign"]={docgenInfo:o.__docgenInfo,name:"SliderAlign",path:"src/components/SliderAlign/index.tsx#SliderAlign"})}catch{}const x={spaceV:{...a.marginLeft,control:{type:"number"},description:"Numerical value indicating the size of the gap between each item",table:{...a.marginLeft.table,defaultValue:{summary:l.spaceV,details:null}}},spaceU:{...a.marginLeft,control:{type:"select"},options:u.Unit.length,description:"Units of spaceV",table:{...a.marginLeft.table,defaultValue:{summary:l.spaceU,details:null}}},hideScrollBar:{control:{type:"boolean"},description:"Whether to hide scrollbars",table:{type:{summary:null},category:"ScrollBar",defaultValue:{summary:l.hideScrollBar,details:null}}},barHeightV:{...a.height,control:{type:"number"},description:"Numeric value representing the height of the scrollbar area",table:{...a.height.table,category:"ScrollBar",defaultValue:{summary:l.barHeightV,details:null}}},barHeightU:{...a.height,control:{type:"select"},options:u.Unit.length,description:"Units of barHeightV",table:{...a.height.table,category:"ScrollBar",defaultValue:{summary:l.barHeightU,details:null}}},paddingV:{...a.padding,control:{type:"number"},description:"Numeric value representing the size of the space between the four sides of the Slider and the child elements.",table:{...a.padding.table,defaultValue:{summary:l.paddingV,details:null}}},paddingU:{...a.padding,control:{type:"select"},options:u.Unit.length,description:"Units of paddingV",table:{...a.padding.table,defaultValue:{summary:l.paddingU,details:null}}},itemWidth:{...a.width,description:"Width of each item",table:{...a.width.table,defaultValue:{summary:l.itemWidth,details:null}}},height:{...a.height,description:"Height of the SliderAlign component itself",table:{...a.height.table,defaultValue:{summary:l.height,details:null}}},barBgColor:{...a.backgroundColor,description:"Background color of scrollbar area",table:{...a.backgroundColor.table,category:"ScrollBar",defaultValue:{summary:l.barBgColor,details:null}}},barColor:{...a.color,description:"Color of scrollbar",table:{...a.color.table,category:"ScrollBar",defaultValue:{summary:l.barColor,details:null}}}},I={title:"layout/SliderAlign",component:o,parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react'
import { SliderAlign } from '../components/SliderAlign'
import { defaultProps } from '../components/SliderAlign/model'
import { desc_SliderAlignProps } from './args/SliderAlign'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React from 'react'

export default {
  title: 'layout/SliderAlign',
  component: SliderAlign,
  parameters: {
    docs: {
      description: {
        component: 'Elements you want to put side by side in a slider format'
      }
    }
  },
  argTypes: {
    ...desc_as,
    ...desc_ref,
    ...desc_children,
    ...desc_SliderAlignProps
  }
}

const FitHeightContainer = styled.div\`
  height: 100%;
  color: #4d608b;
  background-color: #4d608b;
\`

const Item = styled.div\`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe;
  height: 100px;
  width: 150px;
\`

const Template: ComponentStory<typeof SliderAlign> = ({
  children,
  ...args
}) => (
  <SliderAlign {...args} as={FitHeightContainer}>
    <Item>one!!</Item>
    <Item>two!!</Item>
    <Item>three!!</Item>
    <Item>four!!</Item>
    <Item>five!!</Item>
    <Item>six!!</Item>
    <Item>seven!!</Item>
    <Item>eight!!</Item>
    <Item>nine!!</Item>
    <Item>ten!!</Item>
  </SliderAlign>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
`,locationsMap:{playground:{startLoc:{col:53,line:42},endLoc:{col:1,line:58},startBody:{col:53,line:42},endBody:{col:1,line:58}}}},docs:{description:{component:"Elements you want to put side by side in a slider format"}}},argTypes:{...f,...b,...y,...x}},w=s.div`
  height: 100%;
  color: #4d608b;
  background-color: #4d608b;
`,t=s.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe;
  height: 100px;
  width: 150px;
`,C=({children:e,...i})=>p(o,{...i,as:w,children:[n(t,{children:"one!!"}),n(t,{children:"two!!"}),n(t,{children:"three!!"}),n(t,{children:"four!!"}),n(t,{children:"five!!"}),n(t,{children:"six!!"}),n(t,{children:"seven!!"}),n(t,{children:"eight!!"}),n(t,{children:"nine!!"}),n(t,{children:"ten!!"})]}),_=C.bind({});_.args={...l};const U=["playground"];export{U as __namedExportsOrder,I as default,_ as playground};
//# sourceMappingURL=SliderAlign.stories.663efb89.js.map
