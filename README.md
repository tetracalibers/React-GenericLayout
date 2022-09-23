# @polym/every-layout

**Collection of React generic layout components inspired by [Every-Layout](https://every-layout.dev/)**

## Concept

### as props

The container that realizes the layout is rendered in div by default, but this can be changed by `as` props.

The `as` can be

- HTML tag name
- React component
- styled component

Depending on the `as`, the `ref` and props that can be specified for the component will change.

If `as` is rendered as an HTML element, then all of the HTML attributes of that element can be specified `as` props.

If `as` is a component, the functions and styles that the component has are merged.

---

## AspectFrame

**Responsive images with preserved aspect ratio**

```ts
<AspectFrame as={YourWrapper} {...moreProps}>
  <img src={yourImage} />
</AspectFrame>
```

## Grid

**Responsive grid layout without explicit media queries**

```ts
<Grid as={YourWrapper} {...moreProps}>
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
</Grid>
```

## HorizontalCenter

**Horizontal Centering Layout**

```ts
<HorizontalCenter as={YourWrapper} {...moreProps}>
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
</HorizontalCenter>
```

## VerticalCenter

**Layout that vertically centers any of several vertically aligned elements**

```ts
<VerticalCenter as={YourWrapper} {...moreProps}>
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
</VerticalCenter>
```

## HorizontalStack

**Horizontal alignment layout that wraps nicely on small screens**

```ts
<HorizontalStack as={YourWrapper} {...moreProps}>
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
</HorizontalStack>
```

## VerticalStack

**Layout with elements evenly spaced vertically**

```ts
<VerticalStack {...args} as={NeedScrollContainer}>
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
```

## SwitchStack

**Layout switches from horizontal to vertical depending on screen width and number of elements**

```ts
<SwitchStack as={YourWrapper} {...moreProps}>
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
</SwitchStack>
```

## TwoColumn

**Responsive two-column layout with side content and main content**

```ts
<TwoColumn as={YourWrapper} {...moreProps}>
  <YourColumn1 />
  <YourColumn2 />
</TwoColumn>
```

## OverlapLayer

**Layout with layers on top of layers**

Usage: Modal Dialog, Fixed Header, etc.

```ts
<OverlapLayer.Origin>
  <OverlapLayer.Upper as={YourWrapper} {...moreProps}>
    <YourOverlayInnerComponent />
  </OverlapLayer.Upper>
  <YourBackGroundComponent />
</OverlapLayer.Origin>
```

## SliderAlign

**Scrollable horizontal alignment layout**

Usage: Carousel, etc.

```ts
<SliderAlign as={YourWrapper} {...moreProps}>
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
  <YourComponent />
</SliderAlign>
```
