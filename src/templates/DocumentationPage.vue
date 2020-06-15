<template>
  <Layout :fixedHeader="true" :hideFooter="false" class="dark:bg-black" :sidebar="sidebar">
    <content-header>
      <h2 class="h1 font-extrabold dark:text-gray-400">{{ $page.repo.title }}</h2>
      <p class="text-gray-600 text-light font-sans" v-html="$page.repo.content"></p>

      <div>
        <div class="inline-block text-center px-2 py-2">
          <a :href="`https://github.com/${$page.repo.repository}/issues`" target="_blank">
            <img
              alt="GitHub issues"
              :src="`https://img.shields.io/github/issues/${$page.repo.repository}?style=social`"
            />
          </a>
        </div>
        <div class="inline-block text-center px-2 py-2">
          <a :href="`https://github.com/${$page.repo.repository}/stargazers`" target="_blank">
            <img
              alt="GitHub issues"
              :src="`https://img.shields.io/github/stars/${$page.repo.repository}?style=social`"
            />
          </a>
        </div>
        <div class="inline-block text-center px-2 py-2">
          <a :href="`https://github.com/${$page.repo.repository}/network`" target="_blank">
            <img
              alt="GitHub issues"
              :src="`https://img.shields.io/github/forks/${$page.repo.repository}?style=social`"
            />
          </a>
        </div>
        <div class="inline-block text-center px-2 py-2">
          <a :href="`https://github.com/${$page.repo.repository}/blob/master/LICENSE`" target="_blank">
            <img
              alt="GitHub license"
              :src="`https://img.shields.io/github/license/${$page.repo.repository}?style=social&label=License`"
            />
          </a>
        </div>
      </div>
    </content-header>
    <div class="container mx-auto dark:bg-black">
      <div class="w-full flex flex-row flex-wrap">
        <div class="w-full h-full flex flex-row flex-wrap post-content">
          <!-- Begin Navbar -->

          <div
            class="dark:text-gray-200 hidden md:block w-full md:w-1/4 lg:w-1/5 bg-white dark:bg-black border-r dark:border-gray-800"
          >
            <div
              class="w-full sticky pin h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden mt-0 border border-grey-light lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20 pt-4"
              style="top:5em;"
              id="menu-content"
            >
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
                    class="block py-1 text-lg hover:text-blue-500"
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
            class="w-full min-h-screen md:w-3/4 lg:w-4/5 px-4 mt-1 mb-12 md:px-12 dark:text-gray-200"
          >
            <div v-html="$page.page.content"></div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $plugin: String, $pluginId: ID ) {
    page: documentation(id: $id) {
      title
      content
    }

    repo: repository(id:$pluginId) {
      title
      content
      repository
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

<static-query>
query {
  metadata {
    siteName
  
    footerNavigation {
        name
        link
        external
    }
  }
}
</static-query>

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
      title: `${this.$page.repo.title} - ${this.$page.page.title}`
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
      return pageUrl == pathUrl || pageUrl + "/" == pathUrl;
    }
  },
  mounted() {
    mediumZoom(".post-content img");
  }
};
</script>