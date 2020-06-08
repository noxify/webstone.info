<template>
  <Layout>
    <content-header :title="$page.page.title"></content-header>

    <div class="min-h-screen md:flex">
      <div class="flex-none w-full md:max-w-xs bg-purple text-white">
        <div v-for="category in sidebar" :key="category.id">
          <h3 class="menu-item">{{ category.title }}</h3>
        </div>
      </div>
      <div class="flex-1 bg-blue text-white" v-html="$page.page.content">
        Main content area
      </div>
    </div>

    <div class="container sm:pxi-0 mx-auto overflow-x-hidden text-gray-800 dark:text-gray-400 py-16">

      <div class="lg:mx-32 md:mx-16 px-4 mb-8">
        <section class="post-content container mx-auto relative dark:text-gray-400">
          <div v-html="$page.page.content"></div>
        </section>
      </div>

      
    </div>

  
  </Layout>
</template>

<page-query>
  query($id: ID!, $plugin: String ) {
    page: documentation(id: $id) {
      title
      content
    }

    sidebar : allMenu(filter:{name:{eq:$plugin}}) {
      edges {
        node {
          category: links {
            id
            title
            links: children {
              id
              title
              url
            }
          }
        }
      }
    }
    
  }
</page-query>

<script>

import _ from "lodash"
import ContentHeader from "~/components/Partials/ContentHeader.vue";
import mediumZoom from "medium-zoom";

export default {
  components: {
    ContentHeader
  },
  metaInfo() {
    return {
      title: this.$page.page.title
    };
  },
  computed: {
    sidebar() {
      return _.first(this.$page.sidebar.edges).node.category;
    }
  },
  mounted() {
    mediumZoom(".post-content img");
  }
};
</script>