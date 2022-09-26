#!/usr/bin/env zx

/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import 'zx/globals'

await $`yarn build-storybook`

await within(async () => {
  cd('storybook-static')

  // .nojekyllファイルを作成
  await $`touch .nojekyll`

  const iframepath = path.resolve(__dirname, '../storybook-static/iframe.html')
  const iframehtml = await fs.readFile(iframepath, 'utf-8')

  await fs.writeFile(
    iframepath,
    iframehtml.replace(/\/assets/g, '/polym-generic-layout/assets')
  )

  await within(async () => {
    cd('assets')

    const assetjs_path = await glob('*@(.map|.js)')

    await assetjs_path.forEach(async (fileName) => {
      const filePath = path.resolve(
        __dirname,
        `../storybook-static/assets/${fileName}`
      )
      const assetjs = await fs.readFile(filePath, 'utf-8')
      await fs.writeFile(
        filePath,
        assetjs.replace(/assets\//g, 'polym-generic-layout/assets/')
      )
    })
  })
})

await $`rm -rf node_modules/.cache/gh-pages`
await $`gh-pages -d storybook-static`
