---
title: Configuration
---

## Configuration

* `typeName` 
Defines the collection where the script should update the nodes

* `sourceField` 
Defines the graphql field which contains the remote image url

* `targetField` 
Defines the field name which will be generated. 
The field is from Type `Image` or `[Images]` in case the source field is not a string.

* `targetPath`
Defines the target directory for the downloaded images
If you set `./src/assets/remoteImages`, it will save the images to `<projectroot>/src/assets/remoteImages/`

* `cache`
Defines whether images will be cached - defaults to `true`.
Setting this to false will force re-download of all images.

* `original`
Defines whether to use the original image path as the file path - defaults to `false`.
Setting this to true will save images in a folder structure the same as the image URL - `https://example.com/some/image/path.jpg` will be saved as `/<target path>/some/image/path.jpg`

> **You have to ensure, that the defined path is valid and the directory exists.**
> It's currently not possible to use `~` or `@`.
