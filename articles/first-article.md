---
title: "Todoco Config"
date: "2018-08-10"
tags: ["todoco", "Test"]
---
Derzeit besteht die Konfiguration nur aus einer .todocoignore um die Dateien die durchsucht werden einzugrenzen. Dies geschieht nach dem Reglement der .gitignore, wobei die gitignore selbst ebenfalls verwendet werden kann indem die Zeile

```js
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
```

in die *.todocoignore* geschrieben wird.

## Perspektive
In Zukunft kann es eine Konfiguration geben um beispielsweise Synchronisationen mit einem Server zu ermöglichen oder verschiedene Keywords — außer **todo** — zu ermöglichen.