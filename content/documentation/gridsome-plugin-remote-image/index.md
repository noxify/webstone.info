---
title: Introduction
---

## Introduction

This is a simple plugin, which is based on a discord discussion.
It's more a workaround than a permanent solution.

The plugin should work with any data source, but I have tested it only with `source-filesystem`.

## Installation

```sh
npm install -s https://github.com/noxify/gridsome-plugin-remote-image.git

# or

yarn add https://github.com/noxify/gridsome-plugin-remote-image.git
```


## Usage

```js
//gridsome.config.js

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    //...
    
    //single image - cache:true - original: false
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'typeName' : 'Entry',
        'sourceField': 'remoteImage',
        'targetField': 'imageDownloaded',
        'targetPath': './src/assets/remoteImages'
      }
    },
    //multiple image - cache:true - original: false
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'typeName' : 'Entry',
        'sourceField': 'remoteImages',
        'targetField': 'imagesDownloaded',
        'targetPath': './src/assets/remoteImages'
      }
    },
    
    //single image - cache:true - original: true
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'original' : true,
        'typeName' : 'Entry',
        'sourceField': 'remoteImage',
        'targetField': 'imageDownloaded',
        'targetPath': './src/assets/remoteImages'
      }
    },
    //single image - cache:false - original: false
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'cache': false,
        'typeName' : 'Entry',
        'sourceField': 'remoteImage',
        'targetField': 'imageDownloaded',
        'targetPath': './src/assets/remoteImages'
      }
    }
  ]
  //...
}
```
