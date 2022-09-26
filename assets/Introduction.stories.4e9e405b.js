import"./jsx-runtime.bb03eb8c.js";import{c as e,A as s,M as u}from"./Props.e2353637.js";import"./iframe.dd94822d.js";import"./string.6ef2b206.js";import"./es.map.constructor.2616ccb8.js";import"./es.number.to-fixed.2cdf7b08.js";function p(){return p=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])}return r},p.apply(this,arguments)}const m={},i="wrapper";function l({components:r,...n}){return e(i,p({},m,n,{components:r,mdxType:"MDXLayout"}),e(u,{title:"Layout/Introduction",mdxType:"Meta"}),e("h1",null,"@polym/generic-layout"),e("p",null,e("strong",{parentName:"p"},"Collection of React generic layout components inspired by ",e("a",{parentName:"strong",href:"https://every-layout.dev/"},"Every-Layout"))),e("h2",null,"Concept"),e("h3",null,"as props"),e("p",null,"The container that realizes the layout is rendered in div by default, but this can be changed by ",e("inlineCode",{parentName:"p"},"as")," props."),e("p",null,"The ",e("inlineCode",{parentName:"p"},"as")," can be"),e("ul",null,e("li",{parentName:"ul"},"HTML tag name"),e("li",{parentName:"ul"},"React component"),e("li",{parentName:"ul"},"styled component")),e("p",null,"Depending on the ",e("inlineCode",{parentName:"p"},"as"),", the ",e("inlineCode",{parentName:"p"},"ref")," and props that can be specified for the component will change."),e("p",null,"If ",e("inlineCode",{parentName:"p"},"as")," is rendered as an HTML element, then all of the HTML attributes of that element can be specified ",e("inlineCode",{parentName:"p"},"as")," props."),e("p",null,"If ",e("inlineCode",{parentName:"p"},"as")," is a component, the functions and styles that the component has are merged."),e("h2",null,"AspectFrame"),e("p",null,e("strong",{parentName:"p"},"Responsive images with preserved aspect ratio")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`<AspectFrame as={YourWrapper} {...moreProps}>
  <img src={yourImage} />
</AspectFrame>
`)),e("h2",null,"Grid"),e("p",null,e("strong",{parentName:"p"},"Responsive grid layout without explicit media queries")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`<Grid as={YourWrapper} {...moreProps}>
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
</Grid>
`)),e("h2",null,"HorizontalCenter"),e("p",null,e("strong",{parentName:"p"},"Horizontal Centering Layout")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`<HorizontalCenter as={YourWrapper} {...moreProps}>
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
</HorizontalCenter>
`)),e("h2",null,"VerticalCenter"),e("p",null,e("strong",{parentName:"p"},"Layout that vertically centers any of several vertically aligned elements")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`<VerticalCenter as={YourWrapper} {...moreProps}>
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
</VerticalCenter>
`)),e("h2",null,"HorizontalStack"),e("p",null,e("strong",{parentName:"p"},"Horizontal alignment layout that wraps nicely on small screens")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`<HorizontalStack as={YourWrapper} {...moreProps}>
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
</HorizontalStack>
`)),e("h2",null,"VerticalStack"),e("p",null,e("strong",{parentName:"p"},"Layout with elements evenly spaced vertically")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`<VerticalStack {...args} as={NeedScrollContainer}>
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent>
    <YourComponent />
    <YourComponent />
    <YourComponent />
  </YourComponent>
  <YourComponent />
</VerticalStack>
`)),e("h2",null,"SwitchStack"),e("p",null,e("strong",{parentName:"p"},"Layout switches from horizontal to vertical depending on screen width and number of elements")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`<SwitchStack as={YourWrapper} {...moreProps}>
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
</SwitchStack>
`)),e("h2",null,"TwoColumn"),e("p",null,e("strong",{parentName:"p"},"Responsive two-column layout with side content and main content")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`<TwoColumn as={YourWrapper} {...moreProps}>
  <YourColumn1 />
  <YourColumn2 />
</TwoColumn>
`)),e("h2",null,"OverlapLayer"),e("p",null,e("strong",{parentName:"p"},"Layout with layers on top of layers")),e("p",null,"Usage: Modal Dialog, Fixed Header, etc."),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`<OverlapLayer.Origin>
  <OverlapLayer.Upper as={YourWrapper} {...moreProps}>
    <YourOverlayInnerComponent />
  </OverlapLayer.Upper>
  <YourBackGroundComponent />
</OverlapLayer.Origin>
`)),e("h2",null,"SliderAlign"),e("p",null,e("strong",{parentName:"p"},"Scrollable horizontal alignment layout")),e("p",null,"Usage: Carousel, etc."),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`<SliderAlign as={YourWrapper} {...moreProps}>
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
</SliderAlign>
`)))}l.isMDXComponent=!0;const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const o={title:"Layout/Introduction",includeStories:["__page"]},d={};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(s,{mdxStoryNameToKey:d,mdxComponentAnnotations:o},e(l,null))};const f=["__page"];export{f as __namedExportsOrder,c as __page,o as default};
//# sourceMappingURL=Introduction.stories.4e9e405b.js.map
