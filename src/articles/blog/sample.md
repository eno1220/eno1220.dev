---
slug: 'sample'
title: '文化祭のIT化を進めた話'
date: '20230705'
description: 'ブログのテスト'
tags: ['next.js', 'react']
---

## サンプル

[リンク](https://example.com)を参照。

https://example.com

- 1
- 2
- 3

![avatar](./images/eno1220.webp)

## h2

こんにちは、eno1220 です。
この記事では、私の所属する学校で行われた文化祭の IT 化への取り組みについて紹介します。文化祭実行委員会等で IT 系を担当する方などの参考になればと思います。
文章力がないため読みにくい箇所もあるかと思いますが、最後まで読んでいただけると嬉しいです。

### h3

#### h4

##### h5

###### h6

> hoge

```ts
const rehypePrettyCode = require('rehype-pretty-code')
const fs = require('fs')

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // See Options section below.
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
})
```
