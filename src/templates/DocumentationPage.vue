<template>
  <Layout :fixedHeader="true" :hideFooter="false" class="dark:bg-gray-900" :sidebar="sidebar">
    <div class="container mx-auto dark:bg-gray-900">
      <div class="w-full flex flex-row flex-wrap">
        <div class="w-full h-full flex flex-row flex-wrap">
          <!-- Begin Navbar -->

          <div
            class="fixed dark:text-gray-200 hidden md:block w-full md:w-1/4 lg:w-1/5 bg-white overflow-y-visible dark:bg-gray-900 border-r dark:border-gray-800 sticky"
          >
            <div class="fixed overflow-y">
              <div
                class="sidebar-section block ml-4"
                v-for="category in sidebar"
                :key="category.id"
              >
                <h4 class="text-xl">{{ category.title }}</h4>
                <div class="category-links">
                  <g-link
                    :to="urlLink(link.url)"
                    v-for="link in category.links"
                    :key="link.id"
                    class="block"
                    v-bind:class="{
                    'text-blue-500' : isActive(link.url)
                  }"
                  >{{ link.title }}</g-link>
                </div>
              </div>
            </div>
          </div>

          <!-- End Navbar -->

          <div
            class="w-full md:w-3/4 lg:w-4/5 p-4 md:px-12 dark:text-gray-200"
            v-html="$page.page.content"
          ></div>
        </div>
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
import _ from "lodash";
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
  methods: {
    urlLink(url) {
      return `/documentation/${this.$context.plugin}${url}`;
    },
    isActive(url) {
      const pageUrl = this.urlLink(url);
      const pathUrl = this.$route.path;
      return pageUrl == pathUrl;
    }
  },
  mounted() {
    mediumZoom(".post-content img");
  }
};
</script>