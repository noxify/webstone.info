---
title: Example
---

## Markdown Files

> /content/entries/entry1.md

```md
---
title: First Post
remoteImage: https://images.unsplash.com/photo-1580451998921-c1e6e1ababe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80
---

Image Credits: https://unsplash.com/
```

> /content/entries/entry2.md

```md
---
title: Second Post
excerpt: Second Post
date: 2020-01-14T21:53:14.578Z
remoteImages: 
  - https://images.unsplash.com/photo-1525013066836-c6090f0ad9d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80
  - https://images.unsplash.com/photo-1546489545-697049cfdc1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2872&q=80
---

Image Credits: https://unsplash.com/
```

## GraphQL Query

```graphql
{
  allEntry {
    edges {
      node {
        title
        imageDownloaded
        imagesDownloaded {
          image
        }
      }
    }
  }
}

```

## GraphQL Result

```json
{
  "data": {
    "allEntry": {
      "edges": [
        {
          "node": {
            "title": "Second Post",
            "imageDownloaded": {
              "type": "image",
              "mimeType": "image/jpeg",
              //... and all other image properties
            },
            "imagesDownloaded": null
          }
        },
        {
          "node": {
            "title": "First Post",
            "imageDownloaded": null,
            "imagesDownloaded": [
              {
                "image": {
                  "type": "image",
                  "mimeType": "image/jpeg",
                  //... and all other image properties
                }
              },
              {
                "image": {
                  "type": "image",
                  "mimeType": "image/jpeg",
                  //... and all other image properties
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```