<template>
  <Layout>
    <content-header title="Repositories" sub="A list of all my packages and themes for Gridsome"></content-header>

    <div class="container mx-auto py-16">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center mt-4">
        <h2 class="sm:text-4xl md:text-6xl font-medium title-font text-gray-900 dark:text-white">
          I <font-awesome :icon="['fas', 'heart']" class="text-red-500"></font-awesome> Open Source
        </h2>
        <p class="lg:w-1/2 w-full leading-relaxed text-base dark:text-gray-200">
          All my packages/starters were built with open source resources and are licensed under MIT license.
        </p>
      </div>

      <div class="mx-4 pb-2">
        <div class="lg:w-1/2 w-full mb-0">
          <h3
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-gray-200"
          >Gridsome Starters</h3>
          <div class="h-1 w-20 bg-blue-500 rounded"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4 content-center">
        <div
          class="post-card border-gray-200 dark:border-gray-900 bg-white dark:bg-black rounded-lg hover:shadow-xl z-100 dark:bg-gray-900 m-4 dark:text-gray-200"
          v-for="edge in $page.starters.edges"
          :key="edge.node.id"
        >
          <div class="flex flex-col min-h-full">
            <div class="px-6 py-6 flex-grow">
              <h3 class="text-xl mt-0">{{ edge.node.title }}</h3>
              <div v-html="edge.node.content"></div>
            </div>
            <div
              class="px-0 py-3 border-t bg-gray-100 dark:border-gray-900 dark:bg-gray-800 flex justify-end"
            >
              <a
                :href="`https://www.github.com/${edge.node.repository}`"
                class="border border-gray-400 bg-gray-200 dark:bg-gray-700 dark:border-gray-900 text-gray-900 dark:text-gray-200 hover:text-gray-200 hover:bg-blue-500 hover:border-gray-500 dark-hover:bg-blue-500 font-medium text-sm py-1 px-5 rounded mr-3"
              >Github</a>

              <a
                :href="edge.node.demo"
                class="border border-gray-400 bg-gray-200 dark:bg-gray-700 dark:border-gray-900 text-gray-900 dark:text-gray-200 hover:text-gray-200 hover:border-gray-500 hover:bg-green-500 dark-hover:bg-green-500 font-medium text-sm py-1 px-5 rounded mr-3"
              >Demo</a>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-4 mt-16 pb-2">
        <div class="lg:w-1/2 w-full mb-0">
          <h3
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-gray-200"
          >Gridsome Packages</h3>
          <div class="h-1 w-20 bg-blue-500 rounded"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4 content-center">
        <div
          class="post-card border-gray-200 dark:border-gray-900 bg-white dark:bg-black rounded-lg hover:shadow-xl z-100 dark:bg-gray-900 m-4 dark:text-gray-200"
          v-for="edge in $page.packages.edges"
          :key="edge.node.id"
        >
          <div class="flex flex-col min-h-full">
            <div class="px-6 py-6 flex-grow">
              <h3 class="text-xl">{{ edge.node.title }}</h3>
              <div v-html="edge.node.content"></div>
            </div>
            <div
              class="px-0 py-3 border-t bg-gray-100 dark:border-gray-900 dark:bg-gray-800 flex justify-end"
            >
              <a
                :href="`https://www.github.com/${edge.node.repository}`"
                class="border border-gray-400 bg-gray-200 dark:bg-gray-700 dark:border-gray-900 text-gray-900 dark:text-gray-200 hover:text-gray-200 hover:bg-blue-500 hover:border-gray-500 dark-hover:bg-blue-500 font-medium text-sm py-1 px-5 rounded mr-3"
              >Github</a>

              <g-link
                :to="edge.node.docs"
                class="border border-gray-400 bg-gray-200 dark:bg-gray-700 dark:border-gray-900 text-gray-900 dark:text-gray-200 hover:text-gray-200 hover:border-gray-500 hover:bg-green-500 dark-hover:bg-green-500 font-medium text-sm py-1 px-5 rounded mr-3"
              >Documentation</g-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    
    packages: allRepository(filter:{type:{eq:"package"}}){
      
      edges {
        node {
          id
          title
          content
          repository
          docs 
        }
      }
    }

    starters: allRepository(filter:{type:{eq:"starter"}}){
      
      edges {
        node {
          id
          title
          content
          repository
          demo 
        }
      }
    }
  }
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import CardItem from "~/components/Content/CardItem.vue";
import ContentHeader from "~/components/Partials/ContentHeader.vue";
import Pagination from "~/components/Content/Pagination.vue";

export default {
  metaInfo: {
    title: "Repositories"
  },
  components: {
    CardItem,
    ContentHeader,
    Pagination
  }
};
</script>
