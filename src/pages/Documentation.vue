<template>
  <Layout>
    <content-header title="Documentation"></content-header>

    <div class="container mx-auto py-16">
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4 content-center">
        <div
          class="post-card border-gray-200 dark:border-gray-900 bg-white dark:bg-black rounded-lg hover:shadow-xl z-100 dark:bg-gray-900 m-4 dark:text-gray-200"
          v-for="edge in $page.packages.edges"
          :key="edge.node.id"
        >
        <g-link :to="edge.node.docs">
          <div class="flex flex-col min-h-full">
            <div class="px-6 py-6 flex-grow">
              <h3 class="text-xl mt-0">{{ edge.node.title }}</h3>
              <p v-html="edge.node.content"></p>
            </div>
          </div>
        </g-link>
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

    
  }
</page-query>



<script>
import CardItem from "~/components/Content/CardItem.vue";
import ContentHeader from "~/components/Partials/ContentHeader.vue";
import Pagination from "~/components/Content/Pagination.vue";

export default {
  metaInfo: {
    title: "Documentation"
  },
  components: {
    CardItem,
    ContentHeader,
    Pagination
  }
};
</script>
