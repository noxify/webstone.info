---
title: Usage
---

## Global

Inside the `gridsome.config.js` you can define it globally to enable this transformer for all data sources.

```js
module.exports = {

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
      }
    }
  ],

  transformers : {
    remark : {
      plugins : [
        '@noxify/gridsome-remark-table-align'
      ]
    }
  }
}
```

## Data Source

Inside the `gridsome.config.js` you can define it individual for each data source.

```js
module.exports = {

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
        remark: {
          plugins: [
            '@noxify/gridsome-remark-table-align'
          ]
        }
      }
    }
  ]
}
```