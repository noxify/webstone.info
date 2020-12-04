---
title: Example Sanity
---
> This example uses [gridsome-source-sanity](https://gridsome.org/plugins/gridsome-source-sanity)

## Configuration

It is recommended to set `schemaType` to 'Image' if your Sanity studio does not contain any images in order to ensure that the targetField gets the type `Image` rather than `Images`.

```js:title=gridsome.config.js
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: '<project_id>',
        dataset: 'production',
        graphqlTag: 'default'
      }
    }
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'cache': false,
        'typeName': 'SanityImageAsset',
        'sourceField': 'url',
        'targetField': 'localFile',
        'targetPath': 'src/assets/sanity/remoteImage',
        'schemaType': 'Image'
      }
    }
  ]
}
```

## GraphQL Query

```graphql
{
  allSanityImageAsset {
    edges {
      node {
        url
        localFile
      }
    }
  }
}

```

## GraphQL Result

```json
{
  "data": {
    "allSanityImageAsset": {
      "edges": [
        {
          "node": {
            "url": "<sanity-remote-url>",
            "localFile": {
              "type": "file",
              "mimeType": "image/jpeg",
              //... and all other image properties
            }
          }
        }
        //...
      ]
    }
  }
}
```