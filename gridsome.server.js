const _ = require('lodash');
const path = require('path')
const fs = require('fs-extra')
const parseJson = require('json-parse-better-errors')
const jsYaml = require('js-yaml')
const glob = require('globby')

const mimeToParseFunc = {
  'application/json': parseJson,
  'text/yaml': jsYaml.load
}

module.exports = function (api) {

  api.onCreateNode(options => {
    if (options.internal.typeName === 'Blog') {
      options.featured = (options.featured) ? options.featured : false;
      options.tags = (typeof options.tags === 'string') ? options.tags.split(',').map(string => string.trim()) : options.tags;
      options.author = (typeof options.author === 'string') ? options.author.split(',').map(string => string.trim()) : options.author;
      return {
        ...options
      };
    }
    if (options.internal.typeName === 'CustomPage') {
      options.subtitle = options.subtitle || ''
    }
  })

  api.createPages(async ({
    graphql,
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
    const {
      data
    } = await graphql(`{
      allBlog {
        edges {
          node {
            id
            path
            tags {
              title
            }
          }
        }
      }
    }`);

    data.allBlog.edges.forEach(({
      node
    }) => {

      //without the map, you will get an 500 error
      //because the graphql filter requires an array
      //not an object
      var tags = _.map(node.tags, function (tag) {
        return tag.title;
      });

      createPage({
        path: node.path,
        component: './src/templates/BlogPost.vue',
        context: {
          recordId: node.id,
          tags: tags,
        }
      });

    });
  });

  api.createPages(async ({
    graphql,
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
    const {
      data
    } = await graphql(`{
      allDocumentation {
        edges {
          node {
            id
            path
          }
        }
      }
    }`);

    data.allDocumentation.edges.forEach(async ({
      node
    }) => {

      var pathArray = node.path.split('/')
      pathArray.splice(1, 1)

      const pluginName = pathArray[2];

      createPage({
        path: pathArray.join('/'),
        component: './src/templates/DocumentationPage.vue',
        context: {
          id: node.id,
          plugin: pluginName,
          pluginId: pluginName
        }
      });

    });
  });

}