import{r as m,j as t,b}from"./jsx-runtime.83dd56e8.js";import{C as o,s as i,o as y,l,K as n,r as d,d as C,a as x,b as w}from"./ref.f9d68167.js";import{d as v}from"./index.b58c3ee4.js";import"./iframe.4683076c.js";import"./index.3bc3f484.js";const g=o`
  --sub-max-width: ${e=>e.subMaxWidthV+e.subMaxWidthU};
  --main-min-width: ${e=>e.mainMinWidthPer+"%"};
  --gap: ${e=>e.spaceV+e.spaceU};
`,c=o`
  flex-basis: var(--sub-max-width);
  flex-grow: 1;
`,p=o`
  flex-basis: 0;
  flex-grow: 999;
  min-width: var(--main-min-width);
`,s=i.div`
  ${g}

  && {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
  }

  ${e=>e.noStretchHeight&&o`
      && {
        align-items: flex-start;
      }
    `}

  ${e=>e.subColumn==="last"?o`
          & > :first-child {
            ${p}
          }
          & > :last-child {
            ${c}
          }
        `:o`
          & > :first-child {
            ${c}
          }
          & > :last-child {
            ${p}
          }
        `}
`;try{s.displayName="LayoutContainer",s.__docgenInfo={description:"",displayName:"LayoutContainer",props:{spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"em"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},subColumn:{defaultValue:null,description:"",name:"subColumn",required:!1,type:{name:"enum",value:[{value:'"first"'},{value:'"last"'}]}},mainMinWidthPer:{defaultValue:null,description:"",name:"mainMinWidthPer",required:!1,type:{name:"number"}},subMaxWidthV:{defaultValue:null,description:"",name:"subMaxWidthV",required:!1,type:{name:"number"}},subMaxWidthU:{defaultValue:null,description:"",name:"subMaxWidthU",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"em"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},noStretchHeight:{defaultValue:null,description:"",name:"noStretchHeight",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TwoColumn/LayoutContainer.tsx#LayoutContainer"]={docgenInfo:s.__docgenInfo,name:"LayoutContainer",path:"src/components/TwoColumn/LayoutContainer.tsx#LayoutContainer"})}catch{}const _=["first","last"],V={subColumn:l("first"),mainMinWidthPer:l(60),spaceV:l(1.7),spaceU:l("rem"),subMaxWidthV:l(15),subMaxWidthU:l("rem"),noStretchHeight:l(!1)},a=y(V),T=({ref:e,as:r,children:h,...f}={...a})=>t(s,{...f,ref:e,as:r||"div",children:h}),u=m.exports.forwardRef(T);try{u.displayName="TwoColumn",u.__docgenInfo={description:"",displayName:"TwoColumn",props:{spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"em"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},subColumn:{defaultValue:null,description:"",name:"subColumn",required:!1,type:{name:"enum",value:[{value:'"first"'},{value:'"last"'}]}},mainMinWidthPer:{defaultValue:null,description:"",name:"mainMinWidthPer",required:!1,type:{name:"number"}},subMaxWidthV:{defaultValue:null,description:"",name:"subMaxWidthV",required:!1,type:{name:"number"}},subMaxWidthU:{defaultValue:null,description:"",name:"subMaxWidthU",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"em"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},noStretchHeight:{defaultValue:null,description:"",name:"noStretchHeight",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TwoColumn/index.tsx#TwoColumn"]={docgenInfo:u.__docgenInfo,name:"TwoColumn",path:"src/components/TwoColumn/index.tsx#TwoColumn"})}catch{}const S={subColumn:{control:{type:"radio"},options:_,description:"A string indicating which of the two child elements should be considered a sidebar",table:{type:{summary:null},category:"style",defaultValue:{summary:a.subColumn,details:null}}},mainMinWidthPer:{...n.minWidth,control:{type:"number"},description:"Minimum width of main content in horizontal arrangement (%)",table:{...n.minWidth.table,defaultValue:{summary:a.mainMinWidthPer,details:null}}},noStretchHeight:{control:{type:"boolean"},description:"Whether the original height of the element should be maintained in vertical placement",table:{type:{summary:null},category:"style",defaultValue:{summary:a.noStretchHeight,details:null}}},subMaxWidthV:{...n.maxWidth,control:{type:"number"},description:"Width of sidebar when side-by-side",table:{...n.maxWidth.table,defaultValue:{summary:a.subMaxWidthV,details:null}}},subMaxWidthU:{...n.maxWidth,control:{type:"select"},options:d.Unit.length,description:"Unit of subMaxWidthV",table:{...n.maxWidth.table,defaultValue:{summary:a.subMaxWidthU,details:null}}},spaceV:{...n.gap,control:{type:"number"},description:"Gap between sidebar and main content",table:{...n.gap.table,defaultValue:{summary:a.spaceV,details:null}}},spaceU:{...n.gap,control:{type:"select"},options:d.Unit.length,description:"Unit of gapV",table:{...n.gap.table,defaultValue:{summary:a.spaceU,details:null}}}},$={title:"layout/TwoColumn",component:u,parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react'
import { TwoColumn } from '../components/TwoColumn'
import { defaultProps } from '../components/TwoColumn/model'
import { desc_TwoColumnProps } from './args/TwoColumn'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React, { memo } from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

export default {
  title: 'layout/TwoColumn',
  component: TwoColumn,
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
    ...desc_TwoColumnProps
  }
}

const NeedScrollContainer = styled.div\`
  height: 200vh;
  color: #4d608b;
\`

const Column1 = styled.div\`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
\`

const Column2 = styled.div\`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #ffa6a666;
\`

const Column1Content = memo(() => <LoremIpsum />)
const Column2Content = memo(() => <LoremIpsum p={3} />)

const Template: ComponentStory<typeof TwoColumn> = ({ children, ...args }) => (
  <TwoColumn {...args} as={NeedScrollContainer}>
    <Column1>
      <Column1Content />
    </Column1>
    <Column2>
      <Column2Content />
    </Column2>
  </TwoColumn>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
`,locationsMap:{playground:{startLoc:{col:51,line:49},endLoc:{col:1,line:58},startBody:{col:51,line:49},endBody:{col:1,line:58}}}},docs:{description:{component:"Suitable solution to achieve a responsive layout with a sidebar on one side"}}},argTypes:{...C,...x,...w,...S}},W=i.div`
  height: 200vh;
  color: #4d608b;
`,M=i.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
`,L=i.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #ffa6a666;
`,q=m.exports.memo(()=>t(v.LoremIpsum,{})),U=m.exports.memo(()=>t(v.LoremIpsum,{p:3})),O=({children:e,...r})=>b(u,{...r,as:W,children:[t(M,{children:t(q,{})}),t(L,{children:t(U,{})})]}),P=O.bind({});P.args={...a};const N=["playground"];export{N as __namedExportsOrder,$ as default,P as playground};
//# sourceMappingURL=TwoColumn.stories.7d775a29.js.map
