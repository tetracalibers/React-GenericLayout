#!/usr/bin/env zx

/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import 'zx/globals'

//await $`yarn build-storybook`

cd('storybook-static')

await $`git add -A`
await $`git commit -m 'deploy'`

await $`git push -f git@github.com:tetracalibers/polym-every-layout.git main:gh-pages`
