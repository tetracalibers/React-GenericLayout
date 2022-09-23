import{r as p,j as e,b as m}from"./jsx-runtime.9e93894a.js";import{s as c,o as f,l as i,K as n,r as y,d as v,a as S,b as g}from"./ref.5991899f.js";import"./iframe.80349bd2.js";const s=c.div`
  --space: ${({spaceV:a,spaceU:l})=>`${a}${l}`};
  --justify: ${a=>a.justify};
  --align: ${a=>a.align};

  && {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space);
    justify-content: var(--justify);
    align-items: var(--align);
  }
`;try{s.displayName="LayoutContainer",s.__docgenInfo={description:"",displayName:"LayoutContainer",props:{spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"em"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"AlignItems"}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"JustifyContent"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/HorizontalStack/LayoutContainer.tsx#LayoutContainer"]={docgenInfo:s.__docgenInfo,name:"LayoutContainer",path:"src/components/HorizontalStack/LayoutContainer.tsx#LayoutContainer"})}catch{}const h={spaceV:i(1),spaceU:i("rem"),justify:i("flex-start"),align:i("flex-start")},o=f(h),k=({ref:a,as:l,children:u,...d}={...o})=>e(s,{...d,ref:a,as:l||"div",children:u}),r=p.exports.forwardRef(k);try{r.displayName="HorizontalStack",r.__docgenInfo={description:"",displayName:"HorizontalStack",props:{spaceV:{defaultValue:null,description:"",name:"spaceV",required:!1,type:{name:"number"}},spaceU:{defaultValue:null,description:"",name:"spaceU",required:!1,type:{name:"enum",value:[{value:'"px"'},{value:'"em"'},{value:'"ex"'},{value:'"ch"'},{value:'"rem"'},{value:'"vw"'},{value:'"vh"'},{value:'"vmin"'},{value:'"vmax"'},{value:'"vb"'},{value:'"vi"'},{value:'"svw"'},{value:'"svh"'},{value:'"lvw"'},{value:'"lvh"'},{value:'"dvw"'},{value:'"dvh"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"AlignItems"}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"JustifyContent"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/HorizontalStack/index.tsx#HorizontalStack"]={docgenInfo:r.__docgenInfo,name:"HorizontalStack",path:"src/components/HorizontalStack/index.tsx#HorizontalStack"})}catch{}const _={spaceV:{...n.gap,control:{type:"number"},description:"Numeric value representing the Minimum space to be reserved between child elements",table:{...n.gap.table,defaultValue:{summary:o.spaceV,details:null}}},spaceU:{...n.gap,control:{type:"select"},options:y.Unit.length,description:"Units of spaceV",table:{...n.gap.table,defaultValue:{summary:o.spaceU,details:null}}},justify:{...n.justifyContent,table:{...n.justifyContent.table,defaultValue:{summary:o.justify,details:null}}},align:{...n.alignItems,table:{...n.alignItems.table,defaultValue:{summary:o.align,details:null}}}},C={title:"layout/HorizontalStack",component:r,parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react'
import { HorizontalStack } from '../components/HorizontalStack'
import { defaultProps } from '../components/HorizontalStack/model'
import { desc_HorizontalStackProps } from './args/HorizontalStack'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import styled from 'styled-components'
import React from 'react'

export default {
  title: 'layout/HorizontalStack',
  component: HorizontalStack,
  parameters: {
    docs: {
      description: {
        component:
          'Suitable solution to arrange elements of different shapes respectively'
      }
    }
  },
  argTypes: {
    ...desc_as,
    ...desc_ref,
    ...desc_children,
    ...desc_HorizontalStackProps
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

const Template: ComponentStory<typeof HorizontalStack> = ({
  children,
  ...args
}) => (
  <HorizontalStack {...args} as={FitHeightContainer}>
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
  </HorizontalStack>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps
}
`,locationsMap:{playground:{startLoc:{col:57,line:42},endLoc:{col:1,line:58},startBody:{col:57,line:42},endBody:{col:1,line:58}}}},docs:{description:{component:"Suitable solution to arrange elements of different shapes respectively"}}},argTypes:{...v,...S,...g,..._}},x=c.div`
  height: 100%;
  color: #4d608b;
`,t=c.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: #a2a7fe66;
  height: 100px;
  width: 150px;
`,I=({children:a,...l})=>m(r,{...l,as:x,children:[e(t,{children:"one!!"}),e(t,{children:"two!!"}),e(t,{children:"three!!"}),e(t,{children:"four!!"}),e(t,{children:"five!!"}),e(t,{children:"six!!"}),e(t,{children:"seven!!"}),e(t,{children:"eight!!"}),e(t,{children:"nine!!"}),e(t,{children:"ten!!"})]}),b=I.bind({});b.args={...o};const w=["playground"];export{w as __namedExportsOrder,C as default,b as playground};
//# sourceMappingURL=HorizontalStack.stories.90e6319e.js.map
